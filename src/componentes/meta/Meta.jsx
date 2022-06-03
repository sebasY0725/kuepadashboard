import "./meta.css";
import ProgressBar from "@ramonak/react-progress-bar";
export default function Meta() {
  return (
    <div className="GroupMeta">
      <h2>Meta grupal</h2>
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
  );
}
