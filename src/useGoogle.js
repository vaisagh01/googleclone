import React, { useEffect, useState } from "react";
import API_KEY from "./components/keys";

const CONTEXT_KEY = "00f0fdfecbbca4cf1";

const useGoogleSearch = (query) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`
        );

        if (!response.ok) {
          throw new Error(`Error fetching Google Search results: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log("error:" + err);
      }
    };

    if (term) { 
      fetchData();
    }
  }, [term]);

  return { data };
};

export default useGoogleSearch;