import { Button, Img } from "./MenuItem.styled";
import PropTypes from "prop-types";

export default function MenuItem({
  id,
  image,
  product,
  price,
  handleBtnClick,
  total,
}) {
  return (
    <>
      <div>
        <Img src={image} alt={product} width="200" height="132" />
        <p>{product}</p>
      </div>

      <div>
        <p>{price} ₴</p>
        <Button
          type="button"
          onClick={() =>
            handleBtnClick(price, { id, image, product, price, quantity: 1 })
          }
        >
          Add to cart
        </Button>
        <p>{total}</p>
      </div>
    </>
  );
}

MenuItem.propTypes = {
  handleBtnClick: PropTypes.func.isRequired,
};
