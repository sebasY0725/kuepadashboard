import "./App.css";
import Home from "./componentes/Home/Home";
import SideBarLeft from "./componentes/sideBarLeft/SideBarLeft";
import SideBarRight from "./componentes/sideBarRight/SideBarRight";
function App() {
  return (
    <div className="main">
      <SideBarLeft />
      <Home />
      <SideBarRight />
    </div>
  );
}

export default App;
