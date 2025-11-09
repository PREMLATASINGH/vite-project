function Button() {
    function handleClick() {
      document.body.style.backgroundColor = 'lightblue';
    }
  return (
    <button onClick={handleClick}>Change Background Color</button>
  );
}
export default Button;