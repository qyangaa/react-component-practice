import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ReactForm() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setResult("");
    if (password.length < 5) {
      setError(`password must be at least 5 characters`);
    } else {
      setResult(`password: ${password}; username: ${username}`);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {error && <div className="alert alert-danger">{error}</div>}
        {result && <div className="alert alert-success">{result}</div>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
