import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar";

// dependencies
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.min.css";
import "jquery/dist/jquery.js";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
