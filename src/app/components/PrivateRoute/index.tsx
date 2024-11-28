'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    const timeout = setTimeout(() => {
      if (!authToken) {
        // Salva a URL atual no localStorage para redirecionar depois do login
        localStorage.setItem("redirectTo", window.location.pathname);
        router.push("/login");
      } else {
        setLoading(false);
      }
    }, 10);
    return () => clearTimeout(timeout);
  }, [router]);

  if (loading) {
    return <div></div>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
