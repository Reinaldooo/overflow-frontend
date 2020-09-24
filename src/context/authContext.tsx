import React, { createContext, useState } from "react";
//
import api from "../services/api";

interface SignInCredentials {
  email: string;
  passwd: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthState {
  token: string;
  user: object;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setDate] = useState(() => {
    const token = localStorage.getItem("@main:token");
    const user = localStorage.getItem("@main:user");
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });
  const signIn = async ({ email, passwd }: SignInCredentials) => {
    const res = await api.post("session", {
      email,
      passwd,
    });
    const { token, user } = res.data;
    localStorage.setItem("@main:token", token);
    localStorage.setItem("@main:user", JSON.stringify(user));

    setDate({ token, user });
  };

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
