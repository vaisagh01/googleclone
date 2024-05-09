import React, { useEffect, useState } from "react";
import API_KEY from "./components/keys";

const CONTEXT_KEY = "00f0fdfecbbca4cf1";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      setError(null); 

      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        );

        if (!response.ok) {
          throw new Error(`Error fetching Google Search results: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (term) { 
      fetchData();
    }
  }, [term]);

  return { data, isLoading, error };
};

export default useGoogleSearch;