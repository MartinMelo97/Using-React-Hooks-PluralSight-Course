import { useRef } from 'react';

const ImageToggleOnMouseHover = ({ src, alt }) => {

  const imageRef = useRef(null);

  const handleMouseIn = () => {
    imageRef.current.style.filter = 'grayscale(0%)';
  };

  const handleMouseOut = () => {
    imageRef.current.style.filter = 'grayscale(100%)';
  };

  return (
    <img
      src={src}
      alt={alt}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseHover;