import { useState } from 'react'
import './App.css'
import Home from './Home';
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, RedirectToSignIn, } from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PublicPage from './Public';
import { Button } from 'antd';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;


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
        path="/sign-in/*"
        element={
          <div className="sign-page">
            <SignIn routing="path" path="/sign-in" />
            <div className="button-container">
              <Button className="home-button" href="/">
                Public
              </Button>
            </div>
          </div>
        }
      />
      <Route
        path="/sign-up/*"
        element={
          <div className="sign-page">
            <SignUp routing="path" path="/sign-up" />
            <div className="button-container">
              <Button className="home-button" href="/">
              Public
              </Button>
            </div>
          </div>
        }
        />
        <Route
          path='/dashboard'
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
