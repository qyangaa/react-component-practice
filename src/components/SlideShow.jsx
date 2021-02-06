import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function SlideShow() {
  const slides = [
    { title: "slide 1", text: "Lorem ipsum dolor sit amet." },
    {
      title: "slide 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      title: "slide 3",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis?.",
    },
    {
      title: "slide 4",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quisquam?",
    },
  ];

  const [curIdx, setCurIdx] = useState(0);

  return (
    <div>
      Slide show
      <Button onClick={() => setCurIdx(0)} disabled={curIdx == 0}>
        Restart
      </Button>
      <Button onClick={() => setCurIdx(curIdx - 1)} disabled={curIdx <= 0}>
        Prev
      </Button>
      <Button
        onClick={() => setCurIdx(curIdx + 1)}
        disabled={curIdx >= slides.length - 1}
      >
        Next
      </Button>
      <Card>
        <Card.Title>{slides[curIdx].title}</Card.Title>
        <Card.Body>{slides[curIdx].text}</Card.Body>
      </Card>
    </div>
  );
}
