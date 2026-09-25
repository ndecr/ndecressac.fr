import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import { sendContactMessage } from "../services";
import type { ContactFormData, ContactFormField, ContactSubmissionStatus, PortfolioContent } from "../types";

const initialFormData: ContactFormData = {
  email: "",
  message: "",
  name: "",
  subject: ""
};

function isContactFormField(value: string): value is ContactFormField {
  return value === "email" || value === "message" || value === "name" || value === "subject";
}

export interface ContactFormModel {
  readonly onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readonly onSubmit: (event: SyntheticEvent<HTMLFormElement>) => Promise<void>;
  readonly status: ContactSubmissionStatus;
  readonly statusMessage: string | null;
  readonly values: ContactFormData;
}

export function useContactForm(messages: PortfolioContent["contact"]["form"]): ContactFormModel {
  const [values, setValues] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<ContactSubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const field = event.currentTarget.name;

    if (!isContactFormField(field)) {
      return;
    }

    setValues((currentValues) => ({ ...currentValues, [field]: event.currentTarget.value }));
  };

  const onSubmit = async (event: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage(null);

    try {
      await sendContactMessage(values);
      setStatus("success");
      setStatusMessage(messages.success);
      setValues(initialFormData);
    } catch {
      setStatus("error");
      setStatusMessage(messages.error);
    }
  };

  return { onChange, onSubmit, status, statusMessage, values };
}
