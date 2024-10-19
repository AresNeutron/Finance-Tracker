import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

function Auth() {
  return (
    <div className="sign-in-contaier">
      <SignedOut>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <Navigate to={'/'}/>
      </SignedIn>
    </div>
  );
}

export default Auth;
