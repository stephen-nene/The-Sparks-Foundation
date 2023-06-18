import React from "react";
import { Button } from "antd";

export default function PublicPage() {
  return (
    <>
      <div className="public">
        <h1>Welcome to my Oath project</h1>
        <div className="btn">
          <Button className="sign-in-btn" href="/sign-in">
            Sign-in
          </Button>
          <Button className="sign-up-btn" href="/sign-up">
            Sign-up
          </Button>
        </div>
        <a href="/dashboard">Go to Protected page</a>
      </div>
    </>
  );
}
