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
    <>
      <div className="flex flex-col justify-between mr-2">
        <Zoom>
          <img
            alt="first main photo"
            src={mainPhoto}
            width="170"
            className="mb-2 rounded-xl"
            onClick={() => handleChangePhoto(mainPhoto)}
          />
        </Zoom>
        <Zoom>
          <img
            alt="That Wanaka Tree, New Zealand by Laura Smetsers"
            src={secPhoto}
            width="170"
            className="mb-2 rounded-xl"
            onClick={() => handleChangePhoto(mainPhoto)}
          />
        </Zoom>
        <Zoom>
          <img
            alt="That Wanaka Tree, New Zealand by Laura Smetsers"
            src={trdPhoto}
            width="170"
            className="rounded-xl"
            onClick={() => handleChangePhoto(mainPhoto)}
          />
        </Zoom>
      </div>
      <Zoom>
        <img
          alt="That Wanaka Tree, New Zealand by Laura Smetsers"
          src={currentPhoto}
          width="515"
          className="rounded-xl"
        />
      </Zoom>
    </>
  );
};

export default ProductImageZoom;
