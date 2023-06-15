import { useState } from 'react'
import './App.css'
import Home from './Home';
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, RedirectToSignIn, } from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";


if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function PublicPage() {
  return (
    <>
      <h1>Public page</h1>
      <a href="/protected">Go to protected page</a>
    </>
  );
}

function App() {

  const navigate = useNavigate();

  return (
    <ClerkProvider
      navigate={(to) => navigate(to)}
      publishableKey={clerkPubKey}>
      <Routes>
        <Route
          path="/"
          element={<PublicPage />} />
        <Route
          path='/sign-in/*'
          element={<SignIn routing='path' path='/sign-in' />}
        />
        <Route
          path='/sign-up/*'
          element={<SignUp routing='path' path='/sign-up' />}
        />
        <Route
          path='/protected*'
          element={
            <>
              <SignedIn>
                <Home />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>

    </ClerkProvider>
  );
}

export default App
