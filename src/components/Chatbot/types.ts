export interface ChatMessage {
  id: string;
  role: "user" | "bot" | "form-success";
  text: string;
}

export interface CapturedDetails {
  name: string;
  email: string;
  message: string;
}
