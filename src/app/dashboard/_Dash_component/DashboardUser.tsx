"use client";

import MiniSpiner from "@/_Components/MiniSpiner";
import { sessionType } from "@/lib/types/session";
import { useEffect, useState } from "react";

function DashboardUser() {
  const [session, setSession] = useState<sessionType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/session");
        if (!res.ok) throw new Error("Failed to fetch session");
        const data = await res.json();
        setSession(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
  }, []);

  if (isLoading) return <MiniSpiner />;

  return (
    <div>
      <h2>Welcome, {session?.user?.name}</h2>
    </div>
  );
}

export default DashboardUser;

/*
=> this file to get session data only to keep our pages static
*/
