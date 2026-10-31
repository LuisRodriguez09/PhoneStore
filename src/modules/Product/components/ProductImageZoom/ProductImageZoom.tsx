import { FC, useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ProductImageZoomProps {
  mainPhoto: string;
  secPhoto: string;
  trdPhoto: string;
  productName: string;
}

const ProductImageZoom: FC<ProductImageZoomProps> = ({
  mainPhoto,
  secPhoto,
  trdPhoto,
  productName,
}) => {
  const [currentPhoto, setCurrentPhoto] = useState(mainPhoto);
  const photos = [mainPhoto, secPhoto, trdPhoto].filter(
    (photo, index, list) => Boolean(photo) && list.indexOf(photo) === index
  );

  useEffect(() => {
    setCurrentPhoto(mainPhoto);
  }, [mainPhoto]);

  return (
    <section className="product-gallery" aria-label={`Fotos de ${productName}`}>
      <div className="product-thumbnails" role="group" aria-label="Seleccionar foto">
        {photos.map((photo, index) => (
          <button
            className={`product-thumbnail${currentPhoto === photo ? " is-active" : ""}`}
            key={photo}
            type="button"
            aria-label={`Ver foto ${index + 1} de ${productName}`}
            aria-pressed={currentPhoto === photo}
            onClick={() => setCurrentPhoto(photo)}
          >
            <img src={photo} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
      <div className="product-image-stage">
        <Zoom>
          <img
            className="product-main-image"
            alt={`${productName}, foto ${photos.indexOf(currentPhoto) + 1}`}
            src={currentPhoto}
          />
        </Zoom>
      </div>
    </section>
  );
};

export default ProductImageZoom;
