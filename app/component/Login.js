"use client";

import { magic } from "../../lib/magic";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "google",
        redirectURI: "http://localhost:3000/dashboard",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1>Magic + Google</h1>
      <button onClick={handleSocialLogin} className="flex justify-center items-center" style={{border: "1px solid", padding: "10px 24px"}}>
        <FcGoogle size={"2.5rem"} />
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
