import React, { useState } from "react";

export default function TextForm(props) {
  const [text, changedText] = useState("");
  const [replacementText1, changeReplacementText1] = useState("");
  const [replacementText2, changeReplacementText2] = useState("");

  const UpdateReplacement1 = (e) => {
    
    changeReplacementText1(e.target.value)
     
  }
  
    const UpdateReplacement2 = (e) =>
    changeReplacementText2(e.target.value);
    
    

  const changeText = (e) => {
    changedText(e.target.value);
  };

  const convertUpperCase = () => {
    changedText(text.toUpperCase())
    props.showalert("Successfully converted to Uppercase", "success") 
  };

  const convertLowerCase = () => {
    changedText(text.toLowerCase());
    props.showalert("Successfully converted to Lowercase", "success"); 
  };

  const handlecopy = () => {
    console.log('ok')
    let text = document.getElementById("textarea");
    text.select()
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
    props.showalert("Successfully copied", "success"); 
  };

  const handleextraspaces = () => {
    let newText = text.split(/[ ]+/)
    changedText(newText.join(' '))
    props.showalert("We have Successfully remove the extra spaces", "success"); 
  }

  const handleFirstCapital = () => {
     
     
    let newtext = text.split(/[ ]+/).map(e =>  
      e[0].toUpperCase() + e.slice(1).toLowerCase()
    )
    changedText(newtext.join(" "))
    props.showalert("We have Successfully convert first letter of everyword to Uppercase", "success"); 
  }
  
  const clearText = () => {
    changedText(" ");
     props.showalert("Text is Successfully cleared", "success"); 
  }

  const handleReplacement = () => {
    
    changedText(text.replaceAll(replacementText1, replacementText2));
    props.showalert("Successfully replaced if not the check the spaces", "success"); 
  }

   

  

  /* setstyle(props.mode === "light" ? "dark" : "light"); */

  let WordAssending = text.split(/[ ]+/).sort((a, b) => a.length > b.length ? 1 : -1)
  let smallestWord = WordAssending[0];
  let longestWord = WordAssending[WordAssending.length - 1];
   

  let wordsInText = text.split(/[ ]+/).length-1
  
  let totalCharacters = text.split("").filter(e => e !== " ").length
  
  

  return (
    <>
      <div className="mt-5">
        <div className="mb-3">
          <label
            htmlFor="textarea"
            className="form-label"
            style={{ color: props.mode === "light" ? "#212529" : "white" }}
          >
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="textarea"
            rows="8"
            value={text}
            onChange={changeText}
            style={{
              color: props.mode === "light" ? "#212529" : "white",
              backgroundColor: props.mode === "light" ? "white" : "#212529",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary m-1 " onClick={convertUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={convertLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-1" onClick={handlecopy}>
          Copy text
        </button>
        <button className="btn btn-primary m-1" onClick={handleextraspaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary m-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary m-1" onClick={handleFirstCapital}>
          First Letter Capital
        </button>
        <br />
        <textarea
          rows="1"
          className=" my-3 form-control"
          id="replaceThis"
          value={replacementText1}
          onChange={UpdateReplacement1}
          style={{
            color: props.mode === "light" ? "#212529" : "white",
            backgroundColor: props.mode === "light" ? "white" : "#212529",
          }}
        ></textarea>
        <button
          onClick={handleReplacement}
          className="form-control btn btn-primary"
        >
          replace with
        </button>
        <textarea
          rows="1"
          className="my-3 form-control"
          id="replaceWith"
          value={replacementText2}
          onChange={UpdateReplacement2}
          style={{
            color: props.mode === "light" ? "#212529" : "white",
            backgroundColor: props.mode === "light" ? "white" : "#212529",
          }}
        ></textarea>
      </div>
      <div className="container my-3">
        <h2 style={{ color: props.mode === "light" ? "#212529" : "white" }}>
          Your text summary
        </h2>
        <p style={{ color: props.mode === "light" ? "#212529" : "white" }}>
          Total words = {wordsInText}
        </p>
        <hr />
        <p style={{ color: props.mode === "light" ? "#212529" : "white" }}>
          total characters = {totalCharacters}
        </p>
        <hr />
        <p style={{ color: props.mode === "light" ? "#212529" : "white" }}>
          Approx time to read = {(wordsInText * 0.005).toFixed(2)} minutes
        </p>
        <hr />
        <p style={{ color: props.mode === "light" ? "#212529" : "white" }}>
          Smallest Word's length = {smallestWord.length}
        </p>
        <p style={{ color: props.mode === "light" ? "#212529" : "white" }}>
          Longest Word's length = {longestWord.length}
        </p>
        <hr />
        <h3 style={{ color: props.mode === "light" ? "#212529" : "white" }}>
          Preview
        </h3>
        <p style={{ color: props.mode === "light" ? "#212529" : "white" }}>
          {text}
        </p>
      </div>
    </>
  );
}
