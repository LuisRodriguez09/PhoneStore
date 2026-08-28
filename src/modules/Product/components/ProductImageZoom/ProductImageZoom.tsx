import { FC, useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ProductImageZoomProps {
  mainPhoto: string;
  secPhoto: string;
  trdPhoto: string;
}

const ProductImageZoom: FC<ProductImageZoomProps> = ({
  mainPhoto,
  secPhoto,
  trdPhoto,
}) => {
  const [currentPhoto, setCurrentPhoto] = useState(mainPhoto);

  const handleChangePhoto = (photo: string) => {
    setCurrentPhoto(photo);
  };

  useEffect(() => {
    setCurrentPhoto(mainPhoto);
  }, [mainPhoto]);

  return (
    <div className="flex w-full flex-col-reverse gap-3 sm:flex-row">
      <div className="flex flex-row justify-between gap-2 sm:flex-col sm:justify-start">
        <Zoom>
          <img
            alt="first main photo"
            src={mainPhoto}
            className="h-24 w-24 rounded-xl border border-slate-200 object-cover sm:h-28 sm:w-28"
            onClick={() => handleChangePhoto(mainPhoto)}
          />
        </Zoom>
        <Zoom>
          <img
            alt="segunda foto del producto"
            src={secPhoto}
            className="h-24 w-24 rounded-xl border border-slate-200 object-cover sm:h-28 sm:w-28"
            onClick={() => handleChangePhoto(secPhoto)}
          />
        </Zoom>
        <Zoom>
          <img
            alt="tercera foto del producto"
            src={trdPhoto}
            className="h-24 w-24 rounded-xl border border-slate-200 object-cover sm:h-28 sm:w-28"
            onClick={() => handleChangePhoto(trdPhoto)}
          />
        </Zoom>
      </div>
      <Zoom>
        <img
          alt="imagen principal del producto"
          src={currentPhoto}
          className="max-h-[520px] w-full rounded-2xl border border-slate-200 object-cover"
        />
      </Zoom>
    </div>
  );
};

export default ProductImageZoom;
