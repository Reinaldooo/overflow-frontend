import React from "react";
//
// import Routes from "./routes";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import GlobalStyles from "./styles";
import { AuthProvider } from "./hooks/useAuth";
import ToastContainer from "./components/ToastContainer";

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
}

export default App;
