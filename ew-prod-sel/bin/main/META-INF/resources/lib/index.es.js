import React from "@liferay/frontend-data-set-web";
import ReactDOM from "react-dom";
import Test from "./Test";

export default function (elementId) {
  ReactDOM.render(<Test />, document.getElementById(elementId));
}
