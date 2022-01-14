import React from "react";
import { MainTab } from "./sample/MainTab";

var showFunction = Boolean(process.env.REACT_APP_FUNC_NAME);

export default function Tab() {
  return (
    <div>
      <MainTab showFunction={true} />
    </div>
  );
}
