import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hi! I'm interested in your products at AtelierAsbjøn.");
    const whatsappUrl = `https://wa.me/${254758905603}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;