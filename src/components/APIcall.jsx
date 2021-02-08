import React, { useState, useEffect } from "react";
import axios from "axios";

export default function APIcall() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(0);

  const apiEndpoint = "https://jsonplaceholder.typicode.com/posts/";

  const get = () => {
    axios
      .get(apiEndpoint + id)
      .then((response) => {
        let data = response.data;
        setId(data.id);
        setTitle(data.title);
        setBody(data.body);
        setUserId(data.userId);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Post not found");
        } else {
          alert("Unknown error.");
        }
      });
  };

  const put = () => {
    axios
      .put(apiEndpoint + id, { id, userId, title, body })
      .then((response) => {
        alert(`Posted updated`);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Post not found");
        } else {
          alert("Unknown error.");
        }
      });
  };

  const patchtitle = () => {
    axios
      .patch(apiEndpoint + id, { title })
      .then((response) => {
        alert(`Post patched`);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Post doesn't exist");
        } else {
          alert("Unknown error.");
        }
      });
  };

  const post = () => {
    axios
      .post(apiEndpoint, { userId, title, body })
      .then((response) => {
        let id = response.data.id;
        setId(id);
        alert(`Posted with id: ${id}`);
      })
      .catch((error) => {
        if (error.response.status === 409) {
          alert("Post already exists");
        } else {
          alert("Unknown error.");
        }
      });
  };

  const apidelete = () => {
    axios
      .delete(apiEndpoint + id)
      .then((response) => {
        alert(`Post deleted`);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Post doesn't exist");
        } else {
          alert("Unknown error.");
        }
      });
  };

  return (
    <div>
      id:
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      body:
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      userId:
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={() => get()}>Get</button>
      <button onClick={() => post()}>Post</button>
      <button onClick={() => put()}>Put</button>
      <button onClick={() => patchtitle()}>Patch</button>
      <button onClick={() => apidelete()}>Delete</button>
    </div>
  );
}
