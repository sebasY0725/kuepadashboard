import "./sideBarLeft.css";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function SideBarLeft() {
  return (
    <div className="izqMain">
      <div className="topIcons">
        <p className="topH">
          <span className="LogoKET OtherColor">k</span>
          <span className="LogoKET">et</span>
          <br />
          <span className="MiniText OtherColor">Kuepa</span>
          <span className="MiniText">EduTech</span>
        </p>
        <div className="elements">
          <button className="IconButton">
            <HomeIcon
              style={{ fontSize: 50, color: "white" }}
              sx={{ "&:hover": { color: "#f36725 !important" } }}
            />
          </button>
          <button className="IconButton">
            <AssignmentIcon
              style={{ fontSize: 50, color: "white" }}
              sx={{ "&:hover": { color: "#f36725 !important" } }}
            />
          </button>
          <button className="IconButton">
            <HorizontalSplitIcon
              style={{ fontSize: 50, color: "white" }}
              sx={{ "&:hover": { color: "#f36725 !important" } }}
            />
          </button>
        </div>
      </div>
      <div className="bottomIcons">
        <button className="IconButton">
          <ChatBubbleOutlineIcon
            style={{ fontSize: 50, color: "white" }}
            sx={{ "&:hover": { color: "#f36725 !important" } }}
          />
        </button>
        <button className="IconButton">
          <AccountCircleIcon
            style={{ fontSize: 50, color: "white" }}
            sx={{ "&:hover": { color: "#f36725 !important" } }}
          />
        </button>
      </div>
    </div>
  );
}
