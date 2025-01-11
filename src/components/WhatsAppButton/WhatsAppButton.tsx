import { FaWhatsapp } from 'react-icons/fa'; 
import './WhatsAppButton.css';
import { PHONE_NUMBER } from '../../constants';

const WhatsAppButton = () => {
  const message = 'Hola, me gustaría obtener más información.';

  const openWhatsAppChat = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsAppChat}>
      <FaWhatsapp size={32} color="#25D366" />
    </div>
  );
};

export default WhatsAppButton;
