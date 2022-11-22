import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FetchJSON } from "./Middleware/fetchJSON";

export function Login() {
  const [redirectUrl, setRedirectUrl] = useState();

  useEffect(async () => {
    const { authorization_endpoint } = await FetchJSON(
      "https://accounts.google.com/.well-known/openid-configuration"
    );

    const parameters = {
      response_type: "token",
      client_id: "client",
      scope: "email profile",
      redirect_uri: window.location.origin + "/login/callback",
    };

    setRedirectUrl(
      authorization_endpoint + "?" + new URLSearchParams(parameters)
    );
  }, []);

  return (
    <div>
      <h1>Login updated!</h1>
      <a href={redirectUrl}>Do login</a>
      <div>{redirectUrl}</div>
    </div>
  );
}
