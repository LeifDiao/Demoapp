import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import {Provider as RTProvider, themeNames } from "@fluentui/react-teams";


ReactDOM.render(
    
      <RTProvider themeName={themeNames.Default} lang="en-US" >
        <App />
      </RTProvider>
,
    document.getElementById("root")
  );