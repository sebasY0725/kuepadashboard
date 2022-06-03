import "./home.css";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "simple-react-donut-chart/src/style.css";

import Card from "../Card/Card";
import Chart from "../chart/Chart";
import Meta from "../meta/Meta";
import Diary from "../Diary/Diary";
export default function Home() {
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
        <Chart />
        <Meta />
      </div>

      <div className="DiaryContainer">
        <Diary />

        <div>
          <h1> Tu plan de hoy </h1>
          <div className="cards">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
