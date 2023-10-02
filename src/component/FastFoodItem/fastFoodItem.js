import { HiShoppingCart } from "react-icons/hi";
import "../FastFoodItem/fastfooditem.css";

const FastFoodItem = ({ name, price, ingredients, imageUrl, delay }) => {
  return (
    <div
      className="card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz"
      style={{ animationDelay: delay + "s" }}
    >
      <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
        قیمت : {price.toLocaleString()} تومان
      </span>
      <div className="card__placeholder">
        <img src={imageUrl} alt="fast-food-image" className="card-img-top" />
      </div>
      <div className="card-body pt-3 text-center pb-4 d-flex flex-column">
        <h5 className="mb-2">{name}</h5>
        <div className="fs-ms text-muted mb-3 fw-bold">{ingredients}</div>
        <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
          <HiShoppingCart className="fs-5 ms-3" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;
