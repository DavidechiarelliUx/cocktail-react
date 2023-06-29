import { useState, useEffect } from "react";
import ProductItem from "../productItem";
import "./ProductList.css";

const ProductList = ({ name, setProductSection }) => {
  const [search, setSearch] = useState('');
  const [listData, setListData] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setListData(data.drinks));
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listData.length === 0 || !listData.find(drink => drink.strDrink.toLowerCase() === search.toLowerCase())) {
      setErrorMsg("I'm sorry but we don't sell this cocktail, try again with one of ours");
      return;
    }
    setErrorMsg('');
    // handle search here
  }

  return (
    <div>
      <div className="SearchCocktails">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Cocktails'
          />
          <button type='submit'>Search</button>
        </form>
        {errorMsg && <div className='error'>{errorMsg}</div>}
      </div>
      <div className="ProductList">
        <h2>{name}</h2>
        <div className="ProductList__list">
          {listData.filter((drink) => {
            return search.toLowerCase() === ''
              ? true
              : drink.strDrink.toLowerCase().includes(search.toLowerCase());
          }).map((drink) => (
            <ProductItem
              data={drink}
              setProductSection={setProductSection}
              key={drink.idDrink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;