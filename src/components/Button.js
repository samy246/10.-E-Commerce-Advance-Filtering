const Button = ({ onClickHandler, value, title,isActive }) => {
  return (
    <button onClick={onClickHandler} value={value} className={`btns ${isActive ? 'activebrands' : ''}`}>
      {title}
    </button>
  );
};

export default Button;
