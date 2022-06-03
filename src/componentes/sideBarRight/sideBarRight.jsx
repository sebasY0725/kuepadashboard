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
      <div className="cajita">
        <div className="SocialIconText">
          <img
            className="SocialImg"
            src="https://brandlogos.net/wp-content/uploads/2021/11/whatsapp-logo.png"
            alt="WhatsappIcon"
          />
          <p className="SocialText">WHATSAPP</p>
        </div>
        <div className="cajitaName">
          <p className="CajitaP">{data[1]?.name}</p>
          <p className="Timer"> 6 min ago</p>
        </div>
      </div>
      <div className="cajita">
        <div className="SocialIconText">
          <img
            className="SocialImg Face"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png"
            alt="FacebookIcon"
          />
          <p className="SocialText">FACEBOOK</p>
        </div>
        <div className="cajitaName">
          <p className="CajitaP">{data[2]?.name}</p>
          <p className="Timer"> 8 min ago</p>
        </div>
      </div>
      <div className="cajita">
        <div className="SocialIconText">
          <img
            className="SocialImg"
            src="https://img.icons8.com/color/480/apple-mail.png"
            alt="MailIcon"
          />
          <p className="SocialText">MAIL</p>
        </div>
        <div className="cajitaName">
          <p className="CajitaP">{data[3]?.name}</p>
          <p className="Timer"> 25 min ago</p>
        </div>
      </div>
      <div className="cajita">
        <div className="SocialIconText">
          <img
            className="SocialImg"
            src="https://brandlogos.net/wp-content/uploads/2021/11/whatsapp-logo.png"
            alt="WhatsappIcon"
          />
          <p className="SocialText">WHATSAPP</p>
        </div>
        <div className="cajitaName">
          <p className="CajitaP">{data[4]?.name}</p>
          <p className="Timer"> 6 min ago</p>
        </div>
      </div>
      <div className="cajita">
        <div className="SocialIconText">
          <img
            className="SocialImg"
            src="https://img.icons8.com/color/480/apple-mail.png"
            alt="MailIcon"
          />
          <p className="SocialText">MAIL</p>
        </div>
        <div className="cajitaName">
          <p className="CajitaP">{data[5]?.name}</p>
          <p className="Timer"> 6 min ago</p>
        </div>
      </div>
    </div>
  );
}
