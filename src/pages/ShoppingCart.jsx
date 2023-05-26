import CartItem from "components/CartItem";
import { useState, useEffect } from "react";
import { Thumb } from "./pages.styled";

export default function ShoppingCart({ total, addedProducts }) {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     setQuantity((state) => state + 1);
  //   }, [quantity]);

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
          <ul>
            {addedProducts &&
              addedProducts.map((addedProduct) => (
                <li key={addedProduct.id}>
                  <CartItem
                    image={addedProduct.image}
                    product={addedProduct.product}
                    price={addedProduct.price}
                    quantity={addedProduct.quantity}
                  />
                </li>
              ))}
          </ul>
        )}

        <p>Total price: {total} ₴</p>
      </div>
    </div>
  );
}
