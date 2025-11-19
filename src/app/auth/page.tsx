"use client";
import DefaultButton from "@/components/ui/default-button";
import DefaultInput from "@/components/ui/default-input";
import DefaultWrapper from "@/components/ui/default-wrapper";
import { auth, googleProvider } from "@/config/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { useValidateEmail } from "@/hooks/useValidateEmail";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AuthPage() {
  const { userLoggedIn } = useAuth();
  const router = useRouter()

  console.log(userLoggedIn);
  
  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      if (!email || !password) throw new Error("All fields are required.");

      const isEmailValidate = useValidateEmail(email);
      if (!isEmailValidate.validation) throw new Error("Email is not valid.");

      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(auth);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(userLoggedIn) {
      router.push("/")
    }
  }, [userLoggedIn])

  return (
    <div className="text-white p-2 pt-8 w-full flex justify-center flex-col items-center gap-2.5">
      <form onSubmit={signIn}>
        <DefaultWrapper p={{ p: 6 }} wFit col gap={2.5}>
          <DefaultInput
            type="email"
            name="email"
            placeholder="Email..."
            required
          />
          <DefaultInput
            type="password"
            name="password"
            placeholder="password..."
            required
          />

          <DefaultButton type="submit" label="Sign in" active textCenter />
        </DefaultWrapper>
      </form>
      <DefaultButton
        onClick={signInWithGoogle}
        label="Sign in With Google"
        noBoder
        icon="logos:google-icon"
      />
    </div>
  );
}
