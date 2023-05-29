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

const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

export default function ShoppingCart({
  total,
  addedProducts,
  increaseProduct,
  decreaseProduct,
  removeAddedProducts,
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

    setData(data)
      .then((response) => {
        if (response.ok) {
          toast.success("Your order has been sent");
          savedOrders.push(data);
          localStorage.setItem("orders", JSON.stringify(savedOrders));
          setUser(initUser);
          removeAddedProducts();
          return;
        }

        return Promise.reject("Error");
      })
      .catch((error) => {
        toast.error(`Something went wrong. Please try again. ${error}`);
      });
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
              value={user.name}
              onChange={handleChange}
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={user.phone}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={user.address}
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
