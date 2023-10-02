import "./App.css";
import Header from "./component/Header/header";
import CategoryList from "./component/Categori List/categoryList";
import FastFoodList from "./component/FastfoodList/fastFoodList";
import Loading from "./component/Loading/loading";
import { useEffect, useState } from "react";
import { async } from "q";
import axios from "./axios";
import SearchBar from "./component/SearchBar/searchBar";
import NotFound from "./assets/images/404.png";

function App() {
  const [fastFood, setFastFood] = useState([]);
  const [loading, setLoading] = useState(false);

  // This part is for custom hook (UseAxios.js) from here

  // const [url, setUrl] = useState("/FastFood/list");
  // const [respons, , loadin] = useAxios({
  //   method: "GET",
  //   url,
  // });

  // const filterItems = (categoryId) => {
  //   setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  // };

  // const searchItems = async (term) => {
  //   setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  // };

  // to here

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const respons = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setFastFood(respons.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchItems = async (term) => {
    setLoading(true);
    const respons = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setFastFood(respons.data);
    setLoading(false);
  };

  const filterCategory = (categoryId) => {
    fetchData(categoryId);
  };

  return (
    <div className="wrapper bg-fadded-dark">
      <Header></Header>
      <CategoryList filterCategory={filterCategory}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">
        {fastFood.length === 0 ? (
          <>
            <div className="alert alert-warning text-center fade-in-horiz">
              برای کلید واژه فوق هیچ آیتمی یافت نشد
            </div>
            <img
              className="mx-auto mt-5 d-block fade-in-horiz"
              src={NotFound}
              alt="not found"
            />
          </>
        ) : loading ? (
          <Loading theme={"dark"}></Loading>
        ) : (
          <FastFoodList fastFoodItem={fastFood}></FastFoodList>
        )}
      </div>
    </div>
  );
}

export default App;
