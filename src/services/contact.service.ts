import type { ContactFormData } from "../types";

const portfolioContactEndpoint = "https://api.liryna.app:49153/api/portfolio-contact";

export async function sendContactMessage(data: ContactFormData): Promise<void> {
  const response = await fetch(portfolioContactEndpoint, {
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    method: "POST"
  });

  if (!response.ok) {
    throw new Error("Contact request failed");
  }
}
