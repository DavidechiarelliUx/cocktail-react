import { useState, useEffect } from "react";
import { GET } from "../../utils/HTTP";
import ProductItem from "../productItem";
import "./ProductList.css";

const ProductList = ({ name, setProductSection }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setListData(data.drinks));
  }, []);

  return (
    <div className="ProductList">
      <h2>{name}</h2>
      <div className="ProductList__list">
        {listData.map((drink) => (
          <ProductItem
            data={drink}
            setProductSection={setProductSection}
            key={drink.idDrink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;