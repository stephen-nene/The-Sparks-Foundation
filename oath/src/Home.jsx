import React from "react";
import { message } from "antd";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Home() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        message.info("Something is wrong");
        return null;
    }

    const handleEmailCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        message.success("Email copied to clipboard");
      };

    const { emailAddress } = user.emailAddresses[0];

    return (
        <>
            <nav>
                <div className="nav-container">
                    <UserButton className="user-icon" />
                </div>
            </nav>
            <p>Hello, {user.firstName}, you are signed in to Steve's Spark Foundation project</p>
            <p>
        Your email is{" "}
        <a
          onClick={handleEmailCopy}
          style={{ cursor: "pointer" }}
        >
          {emailAddress}
        </a>
      </p>
        </>
    );
}
