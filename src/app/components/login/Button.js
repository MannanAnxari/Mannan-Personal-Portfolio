// "use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  const { status } = useSession(); 

  return status == "authenticated" ? (
    <Link
      style={{ marginRight: 10 }}
      onClick={() => signOut()}
      href="javascript:;"
    >
      Sign out
    </Link>
  ) : (
    <Link style={{ marginRight: 10 }} onClick={() => signIn()} href="javascript:;">
      Sign in
    </Link>
  );
};
