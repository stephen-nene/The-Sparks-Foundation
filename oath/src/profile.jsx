import React from "react";
import { Button } from "antd";

export default function PublicPage() {
  return (
    <>
      <div className="public">
        {user ? (
          <>
            <h2>Welcome {user.displayName}</h2>
            <p>{user.email}</p>
            <div className="photo">
              <img src={user.photoURL} alt="dp" referrerPolicy="no-referrer" />
            </div>
            <Button className="sign-up-btn" href="/sign-up">
              Sign-Out
            </Button>
          </>
        ) : (
          <>
            <div className="btn">
              <Button className="sign-in-btn" href="/sign-in">
                Sign-in
              </Button>
            </div>
          </>

        )}


      </div>
    </>
  );
}
