import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
// console.log(useUser.data)

export default function Home() {
    return (

        <div>
            <UserButton />
            <p>
                Hello you are signed in
            </p>
        </div>
    )
}