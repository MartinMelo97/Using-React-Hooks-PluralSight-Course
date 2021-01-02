import ImageToggleOnMouseOver from '../src/components/ImageToggleOnMouseHover'

const ImageChangeOnMouseHover = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        src='https://www.w3schools.com/howto/pineapple.jpg'
        alt='Pina'
      />
      <ImageToggleOnMouseOver
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDoP6WKFW2_w_q1CcFpkTm0IeNMZCulTFng&usqp=CAU'
        alt='Actosoft'
      />
    </div>
  )
}

export default ImageChangeOnMouseHover