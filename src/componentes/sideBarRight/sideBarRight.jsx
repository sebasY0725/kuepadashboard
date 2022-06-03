import "./sideBarRight.css";
import { useState, useEffect } from "react";

export default function SideBarRight() {
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
    <div className="derMain">
      <div className="cajita">{data[1]?.name}</div>
      <div className="cajita">{data[2]?.name}</div>
      <div className="cajita">{data[3]?.name} </div>
      <div className="cajita">{data[4]?.name}</div>
      <div className="cajita">{data[5]?.name}</div>
    </div>
  );
}
