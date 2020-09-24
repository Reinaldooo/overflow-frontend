import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//
import Routes from "./routes";
import GlobalStyles from "./styles";
import ContextProvider from "./context";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes />
      </ContextProvider>
      <GlobalStyles />
    </Router>
  );
}

export default App;
