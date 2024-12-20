"use client";
import { useAuth, useUser } from "@clerk/nextjs";
export default function User() 
{
  const user = useUser();
  const auth = useAuth();

  return (
    <h1>
      {user.user?.firstName} {user.user?.lastName}
    </h1>
  );
}
