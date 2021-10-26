import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
     </Router>
  );
}

export default App;
