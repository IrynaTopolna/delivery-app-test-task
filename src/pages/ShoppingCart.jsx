import CartItem from "components/CartItem";
import { useState } from "react";
import { setData } from "services/products-api";
import { Item, List } from "./pages.styled";

const initUser = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export default function ShoppingCart({
  total,
  addedProducts,
  increaseProduct,
  decreaseProduct,
}) {
  const [user, setUser] = useState(initUser);

  const handleChange = (evt) => {
    const data = evt.currentTarget;
    setUser({ ...user, [data.name]: data.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      user,
      order: addedProducts,
      total,
    };
    console.log(data);
    setData(data);
  };

  return (
    <div>
      <p>Add your delivery information:</p>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

// {
//   "user": {
//    "name": "Mari",
//    "email": "mari@gmail.com",
//    "phone": "0673333333",
//    "address": "Buga str, 15"
//     }
//    {
//       "name": "Lori",
//       "email": "lori@gmail.com",
//       "phone": "0665555555",
//       "address": "Free str, 7"
//     }
