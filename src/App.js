import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
import LoginGet from "./pages/LoginGet";
import RegisterGet from "./pages/RegisterGet";
import LoginMentor from "./pages/LoginMentor";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login-getaway" component={LoginGet} />
          <Route exact path="/register-getaway" component={RegisterGet} />
          <Route exact path="/login-mentee" component={LoginMentor} />
          <Route exact path="/login-mentor" component={LoginMentor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
