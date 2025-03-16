import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function useProtectedRoute() {
  const { user, setError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;

  useEffect(() => {
    if (!user) {
      navigate("/");
      setError(`Not Authenticated: Can't proceed to '${path}'`);
    }
  }, [user]);

  return;
}

export default useProtectedRoute;
