import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductImageZoom = () => {
  return (
    <Zoom>
      <img
        alt="That Wanaka Tree, New Zealand by Laura Smetsers"
        src="https://www.khatwtelephone.com/lb/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-20-at-6.10.44-PM.jpeg"
        width="500"
      />
    </Zoom>
  );
};

export default ProductImageZoom;
