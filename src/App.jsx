import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { useSelector } from "react-redux";
function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
