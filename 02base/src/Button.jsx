function Button() {
  return (<><div class="btn-group">
  <a href="https://www.google.com"class="btn btn-success" aria-current="page">Active link</a>
  
</div>
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
  <button className="btn btn-warning">Click Me</button></>)
  ;
}
export default Button;