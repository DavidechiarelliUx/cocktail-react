import { useState } from "react"
import "./index.css"


const Navbar = ({setProductSection}) =>{
const [searchInput, setSearchInput] = useState("");

const onHandleSearchInput = (e) => setSearchInput(e.target.value);
const onHandleSubmit = (e) => {
    e.preventDefault();
    setProductSection(searchInput)
}
    return (
      <ul className="Navbar">
        <li onClick={() => setProductSection("")}>Home</li>
        <li onClick={() => setProductSection("contacts")}>Contacts</li>
      <li>
      <form onSubmit={onHandleSubmit}>
        <input 
        type="text" 
        name="search"
        value= {searchInput} 
        onChange={onHandleSearchInput}
        placeholder="Search All Cocktails..."/>
      </form>
      </li>
      </ul>
     )
}

export default Navbar