import "./diary.css";
import { useState, useEffect } from "react";

export default function Diary() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(`https://api.opendota.com/api/proPlayers`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }

      let actualData = await response.json();
      console.log(actualData);
      setData(actualData);

      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Diary">
      Conexiones de agenda para hoy
      <li>{data[1]?.name}</li>
      <li>{data[2]?.name}</li>
      <li>{data[3]?.name}</li>
      <li>{data[4]?.name}</li>
      <li>{data[5]?.name}</li>
    </div>
  );
}
