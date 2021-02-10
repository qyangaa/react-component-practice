import React, { useState } from "react";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";

export default function Flexbox() {
  const [justifyContent, setJustifyContent] = useState("");
  const [flexDirection, setFlexDirection] = useState("");
  return (
    <div>
      <DropdownButton
        as={ButtonGroup}
        id={`justify-content`}
        onSelect={(e) => setJustifyContent(e)}
        title="justify-content"
      >
        <Dropdown.Item eventKey="flex-start">flex-start</Dropdown.Item>
        <Dropdown.Item eventKey="flex-end">flex-end</Dropdown.Item>
        <Dropdown.Item eventKey="center">center</Dropdown.Item>
        <Dropdown.Item eventKey="space-between">space-between</Dropdown.Item>
        <Dropdown.Item eventKey="space-around">space-around</Dropdown.Item>
        <Dropdown.Item eventKey="space-evenly">space-evenly</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id={`flex-direction`}
        onSelect={(e) => setFlexDirection(e)}
        title="flex-direction"
      >
        <Dropdown.Item eventKey="row">row</Dropdown.Item>
        <Dropdown.Item eventKey="row-reverse">row-reverse</Dropdown.Item>
        <Dropdown.Item eventKey="column">column</Dropdown.Item>
        <Dropdown.Item eventKey="column-reverse">column-reverse</Dropdown.Item>
      </DropdownButton>
      <div>{`justify-content: ${justifyContent}`}</div>

      <div
        style={{
          display: "flex",
          flexDirection: flexDirection,
          justifyContent: justifyContent,
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            flexGrow: "0",
            backgroundColor: "grey",
            border: "1px solid",
          }}
        />
        <div
          style={{
            width: "100px",
            height: "50px",
            flexGrow: "0",
            backgroundColor: "blue",
            border: "1px solid",
          }}
        />
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            border: "1px solid",
          }}
        />
      </div>
    </div>
  );
}
