const BASE_URL = "https://643444ee1c5ed06c95935b39.mockapi.io";

export const getRestaurants = () => {
  const response = fetch(`${BASE_URL}/products`);
  return response;
};

export const getMenu = (id) => {
  const response = fetch(`${BASE_URL}/products/${id}`);
  return response;
};

export const setData = (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const response = fetch(`${BASE_URL}/users`, requestOptions);
  return response;
};
