import { Img, Text, Thumb } from "./CartItem.styled";

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
      <Img src={image} alt={product} width="200" height="132" />
      <Text>{product}</Text>
      <Text>{price} ₴</Text>
      <Thumb>
        <button type="button" onClick={decreaseQuantity}>
          -
        </button>
        <Text>{quantity} pcs</Text>

        <button type="button" onClick={increaseQuantity}>
          +
        </button>
      </Thumb>
      <Text>Total: {totalByItem} ₴</Text>
    </>
  );
}
