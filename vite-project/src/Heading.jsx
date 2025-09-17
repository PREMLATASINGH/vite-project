const img1="https://picsum.photos/200/300"
const customeStyle={
    color:"green",
    backgroundColor:"yellow",}
function Heading(){
    return<><img src="/vite.svg" className="img" alt="Vite logo" />
    <img src="/vite.svg"  className="img" alt="Vite logo" />
    <img src="/vite.svg" className="img"  alt="Vite logo" /><img src="apple.jpg"className="img"  alt="Vite logo" />
    <h1 className="heading" contentEditable="true"> Welcome to new journey</h1>
    <h2 style={customeStyle}> this is testing</h2>
    <img src={img1+"?grayscale"} className="img" alt="random image"/>
</>
}
export default Heading