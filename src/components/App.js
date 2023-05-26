import { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
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

  const handleBtnClick = (price, newProduct) => {
    setTotal((state) => state + Number(price));

    const haveNewProduct = addedProducts.find(
      (addedProduct) => newProduct.id === addedProduct.id
    );

    if (haveNewProduct) {
      console.log(haveNewProduct);
      const haveNewProductIndex = addedProducts.findIndex(
        (addedProduct) => newProduct.id === addedProduct.id
      );
      console.log(haveNewProductIndex);
      const newList = addedProducts;
      const del = newList.splice(haveNewProductIndex, 1);
      console.log(del);

      haveNewProduct.quantity += 1;

      newList.push(haveNewProduct);

      console.log(newList);
      setAddedProducts(newList);
    }
    if (!haveNewProduct) {
      setAddedProducts((state) => [...state, newProduct]);
    }
    // console.log(newProduct);
    // console.log(addedProducts);
  };

  const getList = (list) => {
    setRestaurants(list);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Shop getList={getList} />}>
          {restaurants &&
            restaurants.map((restaurant) => (
              <Route
                key={restaurant.id}
                path={restaurant.name}
                element={
                  <Menu
                    handleBtnClick={handleBtnClick}
                    total={total}
                    id={restaurant.id}
                  />
                }
              />
            ))}
        </Route>
        <Route
          path="cart"
          element={<Cart total={total} addedProducts={addedProducts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyles />
    </Layout>
  );
}
