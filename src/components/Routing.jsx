import React, { useState } from "react";

import {
  Route,
  Switch,
  BrowserRouter,
  useParams,
  useRouteMatch,
  Link,
} from "react-router-dom";

function Topic() {
  let { params } = useParams();
  return <p>Requested params: {params} </p>;
}

export default function Routing() {
  const [params, setParams] = useState("");
  return (
    <div>
      <input
        type="text"
        value={params}
        onChange={(e) => setParams(e.target.value)}
      />

      <BrowserRouter>
        <Link
          to={`/route/${params}`}
          className="btn btn-info"
          onClick={() => setParams("")}
        >
          Go
        </Link>
        <Link to={`/`} className="btn btn-success">
          Go Back
        </Link>
        <Switch>
          <Route path={`/route/:params`}>
            <Topic />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
