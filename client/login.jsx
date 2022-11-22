import { Link } from "react-router-dom";
import React, { useEffect } from "react";

export function Login() {
  useEffect(() => {
    window.location.href =
      "https://accounts.google.com/.well-known/openid-configuration";
  }, []);

  return <div>Login updated!</div>;
}
