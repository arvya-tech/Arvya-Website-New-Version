export const CHATBOT_CONFIG = {
  // Backend API URL — all chat requests go through the Node.js backend (API key lives there)
  BACKEND_URL: (import.meta as any).env?.VITE_BACKEND_URL ?? "http://localhost:3001",

  // Formspree endpoint for capturing custom enquiries
  FORMSPREE_ENDPOINT: "https://formspree.io/f/mjgepnop",
};
