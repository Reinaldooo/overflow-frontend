import React from "react";
//
// import Routes from "./routes";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import GlobalStyles from "./styles";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
