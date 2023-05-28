import { Thumb } from "./CartItem.styled";

export default function CartItem({
  id,
  image,
  product,
  price,
  quantity,
  increaseProduct,
  decreaseProduct,
}) {
  const totalByItem = quantity * price;

  const increaseQuantity = () => {
    const updatedProduct = {
      id,
      image,
      product,
      price,
      quantity: 1,
    };
    increaseProduct(updatedProduct);
  };

  const decreaseQuantity = () => {
    const updatedProduct = {
      id,
      image,
      product,
      price,
      quantity: 1,
    };
    decreaseProduct(updatedProduct);
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
        <p>{quantity} pcs</p>

        <button type="button" onClick={increaseQuantity}>
          +
        </button>
      </Thumb>
      <p>Total: {totalByItem} ₴</p>
    </>
  );
}
