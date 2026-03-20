import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%20AgroJet";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={20} />
    <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
  </a>
);

export default WhatsAppButton;
