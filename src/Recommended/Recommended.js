import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick,activeButton }) => {

  return (
    <>
      <div>
        <h2 className="recommended-title">All Products Brands</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" isActive={activeButton === ''}/>
          <Button onClickHandler={handleClick} value="Nike" title="Nike" isActive={activeButton === 'Nike'}/>
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" isActive={activeButton === 'Adidas'}/>
          <Button onClickHandler={handleClick} value="Puma" title="Puma" isActive={activeButton === 'Puma'}/>
          <Button onClickHandler={handleClick} value="Vans" title="Vans" isActive={activeButton === 'Vans'}/>
          <Button onClickHandler={handleClick} value="Redmi" title="Redmi" isActive={activeButton === 'Redmi'}/>
        </div>
      </div>
    </>
  );
};

export default Recommended;
