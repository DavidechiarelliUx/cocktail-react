import { useState } from "react";
import ProductSection from "./components/ProductSection/ProductSection"
import ProductList from "./components/ProductList"
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/contacts/navbar";
import Filters from "./components/filters";
import "./App.css"

function App() {
  const [productSection, setProductSection] = useState("");
  const [categoryList, setCategoryList] = useState(["rum", "vodka", "gin", "tequila", "salt"]);

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return <Contacts />;
      case "":
        return (
          <>
            <Filters
              categoryList={categoryList}
              setCategoryList={setCategoryList}
            />
            {categoryList
              .filter((category) => category.length > 1)
              .map((category, i) => (
                <ProductList
                  name={category}
                  setProductSection={setProductSection}
                  key={i}
                />
              ))}
          </>
        );
      default:
        return (
          <ProductSection
            productSection={productSection}
            setProductSection={setProductSection}
          />
        );
    }
  }

  return (
    <div className="App">
      <Navbar setProductSection={setProductSection}/>
      {onRender()}
    </div>
  );
}

export default App;
