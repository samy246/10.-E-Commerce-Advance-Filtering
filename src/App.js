import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import {
useHistory // was useNavigate
} from "react-router-dom";
function App() {
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeButton, setActiveButton] = useState('');

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    // history.push(`/filtered/${selectedCategory}/${query}`);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log("get value",event.target.value)
    // history.push(`/filtered/${event.target.value}/${query}`);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {

    setActiveButton(event.target.value);

    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
// Applying selected filter
// if (selected) {
//   console.log("selected", selected);
//   filteredProducts = filteredProducts.filter(
//     ({ category, color, company, newPrice, title }) =>
//       (selected === 200 && newPrice >= 200) || // Show newPrice 200 and above when selected is 200
//       (selected !== 200 && (category === selected || color === selected || company === selected || title === selected))
//   );
// }

    if (selected) {
      console.log("selected",selected);
      filteredProducts = filteredProducts.filter(

        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
           newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        // console.log("new price map ",filteredProducts)
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} activeButton={activeButton}/>
      <Products result={result} />
    </>
  );
}

export default App;
