import ProductSection from "./components/ProductSection/ProductSection"
import "./App.css"
import {useState} from "react";

function App() {
const [productSection, setProductSection] = useState("negroni")

  return (
    <>
    <div className="App"> 
    <ProductSection productSection = { productSection}/>
    </div>
    </>
  )
}

export default App
