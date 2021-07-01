import React, { useEffect, useState, useCallback } from "react";
/* 
send any request to fetch or store data
 */
const useHttp = ( applyData) => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);//
    setError(null);// those how make inffinite loop in app set effect
    try {
        //need to be flexable (configrable) so i pass it as parameter
      const response = await fetch(
        requestConfig.url, {
            method: requestConfig.method ? requestConfig.method:'GET',
            headers: requestConfig.headers ?requestConfig.headers:{},
            body: requestConfig.body ? JSON.stringify(requestConfig.body):null,
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }
// aloys work with json here
      const data = await response.json();

      // how to use a data its differ from comp tocomp
      // so i passs it as parameter applyData
      applyData(data);

    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[applyData]);

  return {
    // isLoading:isLoading,
    // error:error,
    // sendRequest:sendRequest,
    //work becuse i pass it as a same name
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
