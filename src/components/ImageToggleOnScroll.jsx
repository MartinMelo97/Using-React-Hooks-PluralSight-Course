import { useState, useEffect, useRef } from 'react';

const ImageToggleOnScroll = ({ src, alt }) => {

  const imageRef = useRef(null);

  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView);
    window.addEventListener('scroll', scrollHandler);
    inView ? handleColorizeImage() : handleBlackAndWhiteImage();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [inView]);

  function scrollHandler() {
    setInView(isInView());
  }

  function isInView() {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function handleColorizeImage() {
    imageRef.current.style.filter = 'grayscale(0%)';
  };

  function handleBlackAndWhiteImage() {
    imageRef.current.style.filter = 'grayscale(100%)';
  };

  return (
    <>
      <img
        src={!isLoading ? src : 'https://image.shutterstock.com/image-vector/loading-icon-logo-isolated-on-260nw-1453631144.jpg'}
        alt={alt}
        ref={imageRef}
      />
    </>
  );
};

export default ImageToggleOnScroll;