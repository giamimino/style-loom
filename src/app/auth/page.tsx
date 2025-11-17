"use client"
import DefaultButton from "@/components/ui/default-button";
import { auth, googleProvider } from "@/config/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth.currentUser?.email);
  
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch(err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error(error)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="text-white">
      <input
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <DefaultButton onClick={signIn} label="Sign in" />
      <DefaultButton onClick={signInWithGoogle} label="Sign in With Google" active />
      <DefaultButton onClick={logout} label="Log out" />
    </div>
  );
}
