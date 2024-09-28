import React from "react";
import dynamic from "next/dynamic";

const LoginContent = dynamic(() => import("@/components/Auth/Login"));

const LoginPage = () => {
  return <LoginContent />;
};

export default LoginPage;
