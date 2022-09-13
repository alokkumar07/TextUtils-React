import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked:"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  };
  const handleClearClick = () => {
    //console.log("Uppercase was clicked:"+text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!","success");
  };

  const handleLowClick = () => {
    //console.log("Uppercase was clicked:"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove ExtraSpaces!","success");
  }
  const [text, setText] = useState("");
  // text="new text"; //wrong way to change the state
  // setText=("new text"); //correct way to change the state
  return (
    <>
      <div className="container"   style={{color: props.mode === 'dark'?'white':'#2c1b5d'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control"value={text} onChange={handleOnChange} 
          style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#2c1b5d'}} 
          id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          ClearText
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra space
        </button>
      </div>
      <div className="container my-3"  style={{color:props.mode === 'dark'?'white':'#2c1b5d'}}>
        <h2>your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length}character
        </p>
        <p>{0.008 * text.split("").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the rext box above to preview it here"}</p>
      </div>
    </>
  );
}
