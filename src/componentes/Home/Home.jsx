import "./home.css";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "simple-react-donut-chart/src/style.css";
import { Donut, DonutValue } from "react-donut-component";
export default function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
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
    getData();
  }, []);

  return (
    <div className="mainHome">
      <div className="topBar">
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <FilterAltIcon />
      </div>
      <h1 className="Welcome">Hola, Jorge</h1>
      <div className="Medium">
        <div className="chart">
          <Donut
            styleTrack={{ strokeWidth: 15, stroke: "gray" }}
            styleIndicator={{ stroke: "#f36725", strokeLinecap: "round" }}
          >
            <DonutValue
              style={{ fontWeight: "bold" }}
              styleSymbol={{ fontWeight: "bold", fontSize: "30px" }}
              symbolPosition="center"
            >
              50
            </DonutValue>
          </Donut>
          <div>Leads obtenidos 50/100</div>
          <div>Cola de llamados 50/100</div>
          <div>Matriculas finalizadas 50/100</div>
        </div>
        <div className="GroupMeta">
          Meta grupal
          <div className="LeadsObt">
            Leads Obtenidos 200/400
            <ProgressBar
              height={"15px"}
              bgColor={"#f36725"}
              completed={50}
              customLabel="  "
            />
          </div>
          <div className="tuitionDone">
            Matriculas realizadas 50/100
            <ProgressBar
              height={"15px"}
              bgColor={"#f36725"}
              completed={50}
              customLabel="  "
            />
          </div>
        </div>
      </div>

      <div className="Diary">
        Conexiones de agenda para hoy
        {data.name}
        {data.name}
        {data.name}
        {data.name}
      </div>
    </div>
  );
}
