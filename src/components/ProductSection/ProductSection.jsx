import  { useState, useEffect } from 'react';
import { GET } from "../../utils/HTTP";
import "./ProductSection.css";

const ProductSection = ({ productSection, setProductSection }) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    GET("?s=" + productSection).then((data) => setProductData(data.drinks[0]));
  }, [productSection]);

  const onHandleClick = () => setProductSection("");

  return (
    <div className="ProductSection">
      <img src={productData.strDrinkThumb} alt={productData.strDrink} />
      <div className="ProductSection__text">
        <div className="ProductSection__text--heading">
          <h1>{productData.strDrink}</h1>
          <p>{productData.strAlcoholic}</p>
        </div>
        <p>❤️</p>
      </div>
      <ul className="ProductSection__ingredients">
        <li>{productData.strIngredient1}</li>
        <li>{productData.strIngredient2}</li>
        <li>{productData.strIngredient3}</li>
        <li>{productData.strIngredient4}</li>
      </ul>
      <p className="ProductSection__instruct">{productData.strInstructions}</p>
      <button className="ProductSection__close--button" onClick={onHandleClick}>
        ❌
      </button>
    </div>
  );
};

export default ProductSection;
