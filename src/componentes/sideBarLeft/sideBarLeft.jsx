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
          <HomeIcon style={{ fontSize: 50, color: "white" }} />
          <AssignmentIcon style={{ fontSize: 50, color: "white" }} />
          <HorizontalSplitIcon style={{ fontSize: 50, color: "white" }} />
        </div>
      </div>
      <div className="bottomIcons">
        <ChatBubbleOutlineIcon style={{ fontSize: 50, color: "white" }} />
        <AccountCircleIcon style={{ fontSize: 50, color: "white" }} />
      </div>
    </div>
  );
}
