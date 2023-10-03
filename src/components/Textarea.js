import React, {useState}from 'react'

export default function Textarea(props) {
    const handleupClick = ()=>{
        //console.log("upper case was clicked")
        var newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase","success");
    }
    const handleLowClick = ()=>{
      //console.log("Lower case was clicked")
      var newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Coverted to lowercase","success");
  }
  const handleClear = ()=>{
    var newText = "";
    setText(newText);
  }
    const handleupChange = (event)=>{
       setText(event.target.value);
    }
    const [text , setText] = useState("");
  return (
    <>
    <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
    <div className="mb-3">
    <h1>{props.headline}</h1>
    <textarea className="form-control" value = {text} onChange={handleupChange} style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
             id="mybox" rows="8"></textarea>
    <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleupClick}>Convert To UpperCase</button>
    <button type="button" className="btn btn-primary my-2" onClick={handleLowClick}>Convert To LowerCase</button>
    <button type="button" className="btn btn-danger my-2 float-end" onClick={handleClear}>Clear</button>
    </div>

    <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words , {text.length}characters</p>
      <p>{.008 *text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text to preview it here"}</p>
    </div>
    </div>
    </>
  )
}
