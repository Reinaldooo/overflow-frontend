import React from "react";
import { useAuth } from "../../context/authContext";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return <h1 onClick={() => signOut()}>Dash</h1>;
};

export default Dashboard;
