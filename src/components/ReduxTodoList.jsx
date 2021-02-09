import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/TodoListActionCreator";
import { ListGroup, Form, Button } from "react-bootstrap";

export default function ReduxTodoList() {
  const todoListState = useSelector((state) => state.todoListState);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(addItem(text));
    }
  };

  const handleDelete = (item) => {
    if (item) {
      dispatch(deleteItem(item));
    }
  };

  return (
    <div>
      <ListGroup>
        {todoListState.todoList &&
          todoListState.todoList.map((item) => (
            <ListGroup.Item key={item} onClick={() => handleDelete(item)}>
              {item}
            </ListGroup.Item>
          ))}
      </ListGroup>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="addTodoItem">
          <Form.Control
            type="text"
            placeholder="Enter item"
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
        Click on item to delete
      </Form>
    </div>
  );
}
