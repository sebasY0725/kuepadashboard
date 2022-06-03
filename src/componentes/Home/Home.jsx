import "./home.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
          <div className="planSection">
            <h1 className="planTitle"> Tu Plan de hoy </h1>
            <div className="Gestion">
              <h4>Ir a la gestion de llamados</h4>
              <ArrowForwardIosIcon />
            </div>
          </div>

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
