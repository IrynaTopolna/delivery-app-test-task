import { RotatingLines } from "react-loader-spinner";
import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Item, List } from "./Menu.styled";
import MenuItem from "components/MenuItem";
import { getMenu } from "services/products-api";

export default function Menu({ handleBtnClick, total, id }) {
  const [menu, setMenu] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");

    getMenu(id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject("Error");
      })
      .then((menu) => {
        if (menu.products.length === 0) {
          setStatus("rejected");
          return;
        }
        setMenu(menu.products);
        setStatus("resolved");
        console.log(menu.products);
      })
      .catch((error) => {
        setStatus("rejected");
      });
  }, [id]);

  return (
    <>
      {status === "pending" && (
        <RotatingLines
          strokeColor="#581845"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      )}
      {status === "rejected" && (
        <h1>Something went wrong. Please, try again</h1>
      )}
      {status === "resolved" && (
        <List>
          {menu.map((product) => (
            <Item key={product.id}>
              <MenuItem
                id={product.id}
                product={product.product}
                image={product.image}
                price={product.price}
                handleBtnClick={handleBtnClick}
                total={total}
              />
            </Item>
          ))}
        </List>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
