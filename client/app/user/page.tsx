"use client";

import { useAuth, useUser } from "@clerk/nextjs";

export default function User() 
{
  const auth = useAuth();
  const user = useUser();

  return (
    <h1>
      {user.user?.firstName} {user.user?.lastName}
    </h1>
  );
}
