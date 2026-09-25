export interface ContactFormData {
  readonly email: string;
  readonly message: string;
  readonly name: string;
  readonly subject: string;
}

export type ContactFormField = keyof ContactFormData;

export type ContactSubmissionStatus = "idle" | "sending" | "success" | "error";
