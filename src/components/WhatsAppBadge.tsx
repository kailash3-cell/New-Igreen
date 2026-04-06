import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppBadge() {
  const phoneNumber = "919421335309";
  const message = "Hello! I'm interested in your renewable energy services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={28} fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
        Chat with us
      </span>
    </motion.a>
  );
}
