import CartItem from "components/CartItem";
import { Item, List } from "./pages.styled";

export default function ShoppingCart({
  total,
  addedProducts,
  increaseProduct,
  decreaseProduct,
}) {
  const handleSubmit = () => {};

  return (
    <div>
      <p>Add your delivery information:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="tel" name="phone" placeholder="Phone" />
        <input type="text" name="address" placeholder="Address" />
      </form>

      <div>
        {addedProducts && (
          <List>
            {addedProducts &&
              addedProducts.map((addedProduct) => (
                <Item key={addedProduct.id}>
                  <CartItem
                    id={addedProduct.id}
                    image={addedProduct.image}
                    product={addedProduct.product}
                    price={addedProduct.price}
                    quantity={addedProduct.quantity}
                    increaseProduct={increaseProduct}
                    decreaseProduct={decreaseProduct}
                  />
                </Item>
              ))}
          </List>
        )}

        <p>Total order: {total} ₴</p>
      </div>
    </div>
  );
}
