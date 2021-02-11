import React, { useState, useReducer } from "react";
import "./Calculator.css";
import { Badge, Button, ButtonGroup } from "react-bootstrap";

const initialState = { number: 0 };

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return { number: 0 };
    case "SET":
      return { number: action.payload };
    case "APPEND":
      return { number: state.number * 10 + action.payload };
    case "+":
      return { number: state.number + action.payload };
    case "-":
      return { number: state.number - action.payload };
    case "*":
      return { number: state.number * action.payload };
    case "/":
      if (action.payload == 0) {
        return { number: NaN };
      }
      return { number: state.number / action.payload };
  }
};

export default function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const [newNumber, dispatchNewNumber] = useReducer(
    calculatorReducer,
    initialState
  );
  const [operand, setOperand] = useState("");

  const handleNumber = (number) => {
    if (!operand) {
      dispatch({ type: "APPEND", payload: number });
    } else {
      dispatchNewNumber({ type: "APPEND", payload: number });
    }
  };

  const getResult = (newOperand) => {
    if (!operand) {
      setOperand(newOperand);
      return;
    }
    dispatch({ type: operand, payload: newNumber.number });
    dispatchNewNumber({ type: "CLEAR" });
    if (newOperand == "=") {
      setOperand("");
    } else {
      setOperand(newOperand);
    }
  };

  const clear = () => {
    dispatch({ type: "CLEAR" });
    setOperand("");
  };

  return (
    <div>
      <>
        <h1>
          <Button onClick={() => clear()} testData="btn-c">
            c
          </Button>
          <Badge variant="secondary" testData="badge-screen">
            {state.number}
            {operand ? operand : ""}
            {newNumber.number ? newNumber.number : ""}
          </Badge>
        </h1>

        <ButtonGroup className="mb-2">
          <Button onClick={() => handleNumber(1)} testData="btn-1">
            1
          </Button>
          <Button onClick={() => handleNumber(2)} testData="btn-2">
            2
          </Button>
          <Button onClick={() => handleNumber(3)} testData="btn-3">
            3
          </Button>
          <Button onClick={() => getResult("+")} testData="btn-+">
            +
          </Button>
          <Button onClick={() => getResult("*")} testData="btn-*">
            *
          </Button>
        </ButtonGroup>
        <br />
        <ButtonGroup className="mb-2">
          <Button onClick={() => handleNumber(4)} testData="btn-4">
            4
          </Button>
          <Button onClick={() => handleNumber(5)} testData="btn-5">
            5
          </Button>
          <Button onClick={() => handleNumber(6)} testData="btn-6">
            6
          </Button>
          <Button onClick={() => getResult("-")} testData="btn--">
            -
          </Button>
          <Button onClick={() => getResult("/")} testData="btn-/">
            /
          </Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="mb-2">
          <Button onClick={() => handleNumber(7)} testData="btn-7">
            7
          </Button>
          <Button onClick={() => handleNumber(8)} testData="btn-8">
            8
          </Button>
          <Button onClick={() => handleNumber(9)} testData="btn-9">
            9
          </Button>
          <Button onClick={() => handleNumber(0)} testData="btn-0">
            0
          </Button>
          <Button onClick={() => getResult()} testData="btn-=">
            =
          </Button>
        </ButtonGroup>
      </>
    </div>
  );
}
