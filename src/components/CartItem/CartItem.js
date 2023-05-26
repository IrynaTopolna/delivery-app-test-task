import { Thumb } from "pages/pages.styled";
import { useState } from "react";

export default function CartItem({ image, product, price, quantity }) {
  const [newQuantity, setNewQuantity] = useState(quantity);

  const increaseQuantity = () => {
    setNewQuantity((state) => state + 1);
  };

  const decreaseQuantity = () => {
    setNewQuantity((state) => state - 1);
  };

  return (
    <>
      <img src={image} alt={product} width="200" height="132" />
      <p>{product}</p>
      <p>{price} ₴</p>
      <Thumb>
        <button type="button" onClick={decreaseQuantity}>
          -
        </button>
        <p>{newQuantity}</p>

        <button type="button" onClick={increaseQuantity}>
          +
        </button>
      </Thumb>
    </>
  );
}
