import { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Layout from "./Layout/Layout";
import { GlobalStyles } from "./GlobalStyles";
import { NotFound } from "pages/NotFound";

const Shop = lazy(() => import("../pages/Shop"));
const Cart = lazy(() => import("../pages/ShoppingCart"));
const Menu = lazy(() => import("./Menu"));

export default function App() {
  const [total, setTotal] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const increaseProduct = (newProduct) => {
    setTotal((state) => state + Number(newProduct.price));

    const haveNewProduct = addedProducts.find(
      (addedProduct) => newProduct.id === addedProduct.id
    );

    if (haveNewProduct) {
      addedProducts.forEach((product) =>
        product.id === newProduct.id
          ? (product.quantity += 1)
          : (product.quantity = product.quantity)
      );
    }
    if (!haveNewProduct) {
      setAddedProducts((state) => [...state, newProduct]);
    }

    toast.success("Product has been added to the cart");
  };

  const decreaseProduct = (product) => {
    setTotal((state) => state - Number(product.price));

    const haveProduct = addedProducts.find(
      (addedProduct) => product.id === addedProduct.id
    );

    if (haveProduct.quantity === 1) {
      const productIndex = addedProducts.findIndex(
        (addedProduct) => product.id === addedProduct.id
      );

      const newList = addedProducts;
      newList.splice(productIndex, 1);
      setAddedProducts(newList);
      return;
    }

    addedProducts.forEach((addedProduct) =>
      addedProduct.id === product.id
        ? (addedProduct.quantity -= 1)
        : (addedProduct.quantity = addedProduct.quantity)
    );

    toast.success("Product has been removed from the cart");
  };

  const getList = (list) => {
    setRestaurants(list);
  };

  const removeAddedProducts = () => {
    setAddedProducts([]);
    setTotal(0);
  };

  return (
    <Layout>
      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
      <Routes>
        <Route path="/" element={<Shop getList={getList} />}>
          {restaurants &&
            restaurants.map((restaurant) => (
              <Route
                key={restaurant.id}
                path="/:id"
                element={<Menu increaseProduct={increaseProduct} />}
              />
            ))}
        </Route>
        <Route
          path="/cart"
          element={
            <Cart
              total={total}
              addedProducts={addedProducts}
              increaseProduct={increaseProduct}
              decreaseProduct={decreaseProduct}
              removeAddedProducts={removeAddedProducts}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyles />
    </Layout>
  );
}
