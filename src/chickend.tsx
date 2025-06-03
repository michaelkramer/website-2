import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/no-unresolved
import { HydratedRouter } from "react-router/dom";

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <HydratedRouter />
  </React.StrictMode>,
);
