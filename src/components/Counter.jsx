import { React, useState } from "react";
import { Button } from "react-bootstrap";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Current count is: {count}
        <Button onClick={() => setCount(count + 1)}> Increase </Button>
        <Button onClick={() => setCount(count - 1)}> Decrease </Button>
      </p>
    </div>
  );
}
