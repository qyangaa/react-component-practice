import React, { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [inputKey, setInputKey] = useState("0");

  const handleFileUpload = (e) => {
    console.log(e);
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <img src={image} alt="image" style={{ width: "100vw" }} />
      <input
        type="file"
        key={inputKey}
        name="image"
        onChange={(e) => handleFileUpload(e)}
      />
      <button
        onClick={() => {
          setInputKey(Date.now());
          setImage(null);
        }}
      >
        Clear
      </button>
    </div>
  );
}
