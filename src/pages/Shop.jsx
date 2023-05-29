import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getRestaurants } from "services/products-api";
import { List, StyledLink, Text, ImmobiledLink } from "./pages.styled";
import { RotatingLines } from "react-loader-spinner";

export default function Shop({ getList }) {
  const [restaurants, setRestaurants] = useState([]);
  const [status, setStatus] = useState("idle");
  const [active, setActive] = useState([]);

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

        const arr = [];
        restaurants.map((restaurant) => arr.push(restaurant.id));
        setActive(arr);
      })
      .catch((error) => {
        setStatus("rejected");
      });
  }, []);

  const onClick = (id) => {
    setActive(id);
  };

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
          <Text>
            Welcome to Food Delivery App. Choose your favorite restaurant.
          </Text>

          <List>
            {restaurants &&
              restaurants.map((restaurant) => (
                <li key={restaurant.id}>
                  {active.includes(restaurant.id) ? (
                    <StyledLink
                      to={`/${restaurant.id}`}
                      onClick={() => onClick(restaurant.id)}
                    >
                      {restaurant.name}
                    </StyledLink>
                  ) : (
                    <ImmobiledLink>{restaurant.name}</ImmobiledLink>
                  )}
                </li>
              ))}
          </List>

          <Outlet />
        </>
      )}
    </div>
  );
}
