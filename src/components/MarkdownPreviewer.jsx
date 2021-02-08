// For inline styles, only implementing bold now, need to use ReactHtmlParser if want to nest other styles
//https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx

import React, { useState, useEffect } from "react";

export default function MarkdownPreviewer() {
  const [mdInput, setMdInput] = useState("");
  const [output, setOutput] = useState("");

  const extractTag = (line, idx) => {
    if (line.startsWith("# ")) {
      return <h1 key={idx}>{processLine(line.slice(2))}</h1>;
    }
    if (line.startsWith("## ")) {
      return <h2 key={idx}>{processLine(line.slice(3))}</h2>;
    }
    if (line.startsWith("### ")) {
      return <h3 key={idx}>{processLine(line.slice(4))}</h3>;
    }
    if (line.startsWith("#### ")) {
      return <h4 key={idx}>{processLine(line.slice(5))}</h4>;
    }
    if (line.startsWith("##### ")) {
      return <h5 key={idx}>{processLine(line.slice(6))}</h5>;
    }
    return processLine(line);
  };

  const processLine = (line) => {
    return processBold(line);
  };

  const processBold = (line) => {
    let boldBlock = line.split("__");
    for (let i = 1; i <= boldBlock.length - 2; i++) {
      boldBlock[i] = <b key={i}> {boldBlock[i]}</b>;
    }
    return boldBlock;
  };

  const processItalics = (line) => {
    let italicBlock = line.split("**");
    for (let i = 1; i <= italicBlock.length - 2; i++) {
      italicBlock[i] = <i key={i}> {italicBlock[i]}</i>;
    }
    return italicBlock;
  };

  useEffect(() => {
    let lines = mdInput.split("\n");
    let tempOutput = [];
    let idx = 0;
    for (let line of lines) {
      tempOutput.push(extractTag(line, idx));
      idx += 1;
    }
    setOutput(tempOutput);
  }, [mdInput]);

  return (
    <div>
      <p>Current version only supports headers and bold style</p>
      <div className="row">
        <div className="col-md-6">
          <textarea
            name="input"
            id="mdInput"
            cols="30"
            rows="10"
            onChange={(e) => setMdInput(e.target.value)}
          ></textarea>
        </div>
        <div className="col-md-6">
          <div className="text-container">{output}</div>
        </div>
      </div>
    </div>
  );
}
