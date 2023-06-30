import { useState } from "react";
import ProductSection from "./components/ProductSection/ProductSection"
import ProductList from "./components/ProductList"
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/contacts/navbar";
import "./App.css"

function App() {
  const [productSection, setProductSection] = useState("");

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return <Contacts />;
      case "":
        return (
          <>
            <ProductList name="rum" setProductSection={setProductSection} />
            <ProductList name="vodka" setProductSection={setProductSection} />
            <ProductList name="gin" setProductSection={setProductSection} />
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
  };

  return (
<div className="App">
  <Navbar setProductSection={setProductSection}/>
  {onRender()}
</div>
  );
}

export default App;
