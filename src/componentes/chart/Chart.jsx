import "./chart.css";
import { Donut, DonutValue } from "react-donut-component";
export default function Chart() {
  return (
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
      <div className="chartGeneral">
        <div className="chartInfo">
          <p>Leads obtenidos</p>
          <p>50/100</p>
        </div>
        <div className="chartInfo">
          <p>Cola de llamados</p>
          <p>50/100</p>
        </div>
        <div className="chartInfo">
          <p>Matriculas finalizadas</p>
          <p>50/100</p>
        </div>
      </div>
    </div>
  );
}