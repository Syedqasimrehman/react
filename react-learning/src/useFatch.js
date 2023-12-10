import { useState, useEffect } from "react";
const useFatch = (url) => {
  const [data, setData] = useState(null);
  const [isPanding, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // ([
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {
            throw Error("Data is not fetch Status 404");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1500);

    return () => abortCont.abort();
    // console.log('Effect is aplied');
    // console.log(blogs);
    // console.log(name)
    // 2nd aargument in this []
  }, [url]);

  return { data, isPanding, error };
};
export default useFatch;
