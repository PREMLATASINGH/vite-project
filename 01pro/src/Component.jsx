function Component() {
    function handleClick() {
        alert("Button in Component clicked!");
    }

    return (
        <div>
            <h2>This is a separate Component!</h2>
        <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default Component;