import React, { createContext, useContext, useState } from "react";
//
import api from "../services/api";

interface SignInCredentials {
  email: string;
  passwd: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
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

    setData({ token, user });
  };

  const signOut = async () => {
    localStorage.removeItem("@main:token");
    localStorage.removeItem("@main:user");

    setData({} as AuthState);
  };

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
