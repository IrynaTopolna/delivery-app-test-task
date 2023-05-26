import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getRestaurants } from "services/products-api";
import { RestItem, RestList, StyledLink, Text } from "./pages.styled";
import { RotatingLines } from "react-loader-spinner";

export default function Shop({ getList }) {
  const [restaurants, setRestaurants] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");

    getRestaurants()
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject("Error");
      })
      .then((restaurants) => {
        if (restaurants.length === 0) {
          setStatus("rejected");
          return;
        }
        setRestaurants(restaurants);
        setStatus("resolved");
        getList(restaurants);
      })
      .catch((error) => {
        setStatus("rejected");
      });
  }, []);

  return (
    <div>
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
        <>
          <Text>Welcome to Delivery App. Choose your favorite restaurant.</Text>

          <RestList>
            {restaurants &&
              restaurants.map((restaurant) => (
                <RestItem key={restaurant.id}>
                  <StyledLink to={restaurant.name}>
                    {restaurant.name}
                  </StyledLink>
                </RestItem>
              ))}
          </RestList>
          <Outlet />
        </>
      )}
    </div>
  );
}
