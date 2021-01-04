import React, { useState, useEffect } from 'react';
import ImageToggleOnScroll from '../src/components/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {

  const images = [
    { src: 'https://www.w3schools.com/howto/pineapple.jpg', alt: 'Pina' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDoP6WKFW2_w_q1CcFpkTm0IeNMZCulTFng&usqp=CAU', alt: 'Actosoft' },
    { src: 'https://www.w3schools.com/howto/pineapple.jpg', alt: 'Pina' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDoP6WKFW2_w_q1CcFpkTm0IeNMZCulTFng&usqp=CAU', alt: 'Actosoft' },
    { src: 'https://www.w3schools.com/howto/pineapple.jpg', alt: 'Pina' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDoP6WKFW2_w_q1CcFpkTm0IeNMZCulTFng&usqp=CAU', alt: 'Actosoft' },
    { src: 'https://www.w3schools.com/howto/pineapple.jpg', alt: 'Pina' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDoP6WKFW2_w_q1CcFpkTm0IeNMZCulTFng&usqp=CAU', alt: 'Actosoft' },
    { src: 'https://www.w3schools.com/howto/pineapple.jpg', alt: 'Pina' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDoP6WKFW2_w_q1CcFpkTm0IeNMZCulTFng&usqp=CAU', alt: 'Actosoft' },
    { src: 'https://www.w3schools.com/howto/pineapple.jpg', alt: 'Pina' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDoP6WKFW2_w_q1CcFpkTm0IeNMZCulTFng&usqp=CAU', alt: 'Actosoft' },
    { src: 'https://www.w3schools.com/howto/pineapple.jpg', alt: 'Pina' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDoP6WKFW2_w_q1CcFpkTm0IeNMZCulTFng&usqp=CAU', alt: 'Actosoft' }
  ];

  const [mouseEventCounter, setMouseEventCounter] = useState(0);
  const [currentImageKey, setCurrentImageKey] = useState(0);

  useEffect(() => {
    window.document.title = `Image key: ${currentImageKey}`;
  }, [currentImageKey]);

  const handleMouseOver = index => {
    setCurrentImageKey(index);
    setMouseEventCounter(mouseEventCounter + 1);
  };

  return (
    <div>
      <span>Counter of Mouse Events: {mouseEventCounter}</span>
      {images.map((image, index) => (
        <div key={index} onMouseOver={() => handleMouseOver(index)}>
          <ImageToggleOnScroll
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageChangeOnScroll;