import { useState, useEffect } from "react";

function useHealthCheck() {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const checkServerHealth = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/health`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setIsRunning(response.ok);
      } catch (error) {
        // If an error occurs, assume the server is not running
        setIsRunning(false);
      }
    };

    checkServerHealth();
  }, []);

  return isRunning;
}

export default useHealthCheck;
