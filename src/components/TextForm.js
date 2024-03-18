import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   console.log(useState("Enter text here"));
  //   text = "new text"; // Wrong way to change the state
  //   setText("New Text"); // Correct way to change the state

  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const findTextLength = (text) => {
    let words = text.split(" ");
    let count = 0;
    for (const word of words) {
      if (word.length !== 0) {
        count++;
      }
    }
    return count;
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "#042743" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text ? findTextLength(text) : 0} words and {text.length} charachters
        </p>
        <p>{findTextLength(text) * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  mode: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Write heading here",
  mode: "light",
};
