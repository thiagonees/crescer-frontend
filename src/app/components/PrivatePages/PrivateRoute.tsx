'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true); // Estado para aguardar a verificação de autenticação
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    // Simula um tempo de carregamento de 3 segundos
    const timeout = setTimeout(() => {
      if (!authToken) {
        router.push("/login");
      } else {

        setLoading(false);
      }
    }, 3000); 
    return () => clearTimeout(timeout);
  }, [router]);

  if (loading) {
    return <div>Para acessar, por favor faca login</div>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
