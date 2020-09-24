import React, { createContext, useContext } from "react";
//
import ToastContainer from "../components/ToastContainer";

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = () => {
    console.log("AddToast");
  };
  const removeToast = () => {
    console.log("RemoveToast");
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  return useContext(ToastContext);
}

export { useToast, ToastProvider };
