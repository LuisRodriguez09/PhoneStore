import { FaWhatsapp } from 'react-icons/fa'; 
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '+526391176171';
  const message = 'Hola, me gustaría obtener más información.';

  const openWhatsAppChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsAppChat}>
      <FaWhatsapp size={32} color="#25D366" />
    </div>
  );
};

export default WhatsAppButton;
