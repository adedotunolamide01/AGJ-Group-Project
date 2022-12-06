import { useEffect, useState } from "react";

const useAppFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");
  function getAppointment() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Fetching data failed.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }
  useEffect(() => {
    getAppointment();
  }, [url]);
  return { data, isPending, error, setData };
};

export default useAppFetch;
