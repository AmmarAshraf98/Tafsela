import { auth } from "@/lib/auth";
import React from "react";

async function page() {
  const session = await auth();
  return (
    <div>
      <h2>Welcome, {session?.user?.name}</h2>
    </div>
  );
}

export default page;
