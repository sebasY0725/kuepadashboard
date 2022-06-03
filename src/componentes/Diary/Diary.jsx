import "./diary.css";
import { useState, useEffect } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
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
      <h2 className="DiaryTitle">Conexiones de agenda para hoy</h2>

      <li className="ListItem">
        <div className="ColorLine"></div>
        <p className="ItemName">{data[1]?.name}</p>
        <div className="ItemsLists">
          <p className="ListItemP1">Llamar</p>
          <p className="ListItemP2">Descuento temporada</p>
        </div>
        <p className="StatusIcon">🟠</p>
        <div className="ListItemIcons">
          <LocalPhoneIcon />
          <MessageIcon />
        </div>
      </li>

      <li className="ListItem ListItemWhite">
        <div className="ColorLine ColorLine2"></div>
        <p className="ItemName">{data[2]?.name}</p>
        <div className="ItemsLists">
          <p className="ListItemP1">Llamar</p>
          <p className="ListItemP2">Descuento temporada</p>
        </div>
        <p className="StatusIcon">🟠</p>
        <div className="ListItemIcons">
          <LocalPhoneIcon />
          <MessageIcon />
        </div>
      </li>

      <li className="ListItem">
        <div className="ColorLine ColorLine3"></div>
        <p className="ItemName">{data[3]?.name}</p>
        <div className="ItemsLists">
          <p className="ListItemP1">Llamar</p>
          <p className="ListItemP2">Descuento temporada</p>
        </div>
        <p className="StatusIcon">⚪</p>
        <div className="ListItemIcons">
          <LocalPhoneIcon />
          <MessageIcon />
        </div>
      </li>

      <li className="ListItem ListItemWhite">
        <div className="ColorLine"></div>
        <p className="ItemName">{data[4]?.name}</p>
        <div className="ItemsLists">
          <p className="ListItemP1">Llamar</p>
          <p className="ListItemP2">Descuento temporada</p>
        </div>
        <p className="StatusIcon">🟠</p>
        <div className="ListItemIcons">
          <LocalPhoneIcon />
          <MessageIcon />
        </div>
      </li>

      <li className="ListItem">
        <div className="ColorLine ColorLine3"></div>
        <p className="ItemName">{data[5]?.name}</p>
        <div className="ItemsLists">
          <p className="ListItemP1">Llamar</p>
          <p className="ListItemP2">Descuento temporada</p>
        </div>
        <p className="StatusIcon">🟠</p>
        <div className="ListItemIcons">
          <LocalPhoneIcon />
          <MessageIcon />
        </div>
      </li>
    </div>
  );
}
