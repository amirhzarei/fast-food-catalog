import { async } from "q";
import { useEffect, useState } from "react";
import axios from "../../axios";
import Loading from "../Loading/loading";
import SearchBar from "../SearchBar/searchBar";

const CategoryList = ({ filterCategory, children }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategoies] = useState([]);

  useEffect(() => {
    const fetchCategorys = async () => {
      const respons = await axios.get("/FoodCategory/categories");
      setCategoies(respons.data);
      setLoading(false);
    };
    fetchCategorys();
  }, [setCategoies]);

  // This part is for custom hook (UseAxios.js) from here

  // const [categories, , loading] =  useAxios({
  //   url: '/FoodCategory/categories'
  // });

  // to here

  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white justify-content-between rounded-3 shadow-lg py-4 ps-5 gap-5"
        style={{ height: "80px" }}
      >
        <div>
          {loading ? (
            <Loading theme={"danger"} />
          ) : (
            <ul className="nav">
              <li
                className="nav-item"
                onClick={() => {
                  filterCategory();
                }}
              >
                <a href="#" className="nav-link">
                  همه فست فود ها
                </a>
              </li>
              {categories.map((category) => (
                <li
                  className="nav-item"
                  key={category.id}
                  onClick={() => {
                    filterCategory(category.id);
                  }}
                >
                  <a href="#" className="nav-link">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </nav>
  );
};

export default CategoryList;
