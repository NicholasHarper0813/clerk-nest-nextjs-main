"use client";

import { useAuth, useUser } from "@clerk/nextjs";

export default function User() 
{
  const auth = useAuth();
  const user = useUser();
  console.log(auth);
  console.log(user);

  return (
    <h1>
      {user.user?.firstName} {user.user?.lastName}
    </h1>
  );
}
