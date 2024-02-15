"use client";

import { magic } from "@/lib/magic";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'


const Dashboard = () => {
  const [user, setUser] = useState();
  const router = useRouter()

  const finishSocialLogin = async () => {
    try {
      const result = await magic.oauth.getRedirectResult();
      setUser(result);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    finishSocialLogin();
  }, []);

  const logout = async () => {
    try {
      await magic.user.logout();
      
      router.push('/')

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      {!user && <div className="loading">Loading...</div>}

      {user && (
        <div>
          <h1>Data returned:</h1>
          <pre className="user-info">{JSON.stringify(user, null, 3)}</pre>
        </div>
      )}
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
