import React from "react";
//
// import Routes from "./routes";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import GlobalStyles from "./styles";
import ContextProvider from "./context";

function App() {
  return (
    <>
      <ContextProvider>
        <SignIn />
      </ContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
