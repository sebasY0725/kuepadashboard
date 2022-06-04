import "./meta.css";
import ProgressBar from "@ramonak/react-progress-bar";
export default function Meta() {
  return (
    <div className="GroupMeta">
      <h2>Meta grupal</h2>
      <div className="LeadsObt">
        <div className="barText">
          <p className="TextTx">Leads Obtenidos</p>
          <p className="numbText">200/400</p>
        </div>

        <ProgressBar
          animateOnRender
          height={"15px"}
          width={"100%"}
          bgColor={"linear-gradient(to right, #ff99cc 0%, #ff6600 100%)"}
          completed={50}
          customLabel="  "
        />
      </div>
      <div className="tuitionDone">
        <div className="barText">
          <p className="TextTx">Matriculas realizadas</p>
          <p className="numbText">50/100</p>
        </div>

        <ProgressBar
          animateOnRender
          height={"15px"}
          bgColor={"linear-gradient(to right, #ff99cc 0%, #ff6600 100%)"}
          completed={50}
          customLabel="  "
        />
      </div>
    </div>
  );
}
