import toast from "react-hot-toast";
import CartItem from "components/CartItem";
import { useState } from "react";
import { setData } from "services/products-api";
import {
  Button,
  Cover,
  DivCards,
  DivForm,
  DivTotal,
  Form,
  Input,
  Item,
  List,
  Text2,
  Total,
} from "./pages.styled";

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
    const inputValue = data.value.toLowerCase().trim();

    setUser({ ...user, [data.name]: inputValue });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const checkedData =
      user.name === "" ||
      user.email === "" ||
      user.phone === "" ||
      user.address === "";

    if (checkedData) {
      toast.error("Please, enter all delivery information");

      return;
    }

    if (addedProducts.length === 0) {
      toast.error("Cart is empty :(");

      return;
    }

    const data = {
      user,
      order: addedProducts,
      total,
    };
    console.log(data);
    setData(data);
  };

  return (
    <>
      <Cover>
        <DivForm>
          <Text2>Add your delivery information:</Text2>

          <Form>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />
          </Form>
        </DivForm>

        <DivCards>
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

          <DivTotal>
            <Total>Total order: {total} ₴</Total>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </DivTotal>
        </DivCards>
      </Cover>
    </>
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
