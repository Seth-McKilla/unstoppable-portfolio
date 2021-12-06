import UAuth from "@uauth/js";

declare const process: {
  env: {
    REACT_APP_UAUTH_CLIENT_ID: string;
    REACT_APP_UAUTH_CLIENT_SECRET: string;
    REACT_APP_UAUTH_REDIRECT_URI: string;
    REACT_APP_UAUTH_LOGOUT_REDIRECT_URI: string;
  };
};

let uauth: UAuth | undefined = undefined;

if (typeof window !== "undefined") {
  uauth = new UAuth({
    clientID: process.env.REACT_APP_UAUTH_CLIENT_ID,
    clientSecret: process.env.REACT_APP_UAUTH_CLIENT_SECRET,
    scope: "openid email wallet example",
    redirectUri: process.env.REACT_APP_UAUTH_REDIRECT_URI,
    postLogoutRedirectUri: process.env.REACT_APP_UAUTH_LOGOUT_REDIRECT_URI,
  });
}

export default uauth;
