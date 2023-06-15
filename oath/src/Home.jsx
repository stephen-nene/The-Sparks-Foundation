import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
// console.log(useUser.data)

export default function Home() {
    return (

        <div>
            <UserButton />
            Hello you are signed in
        </div>
    )
}