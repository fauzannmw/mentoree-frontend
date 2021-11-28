import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
import LoginGate from "./pages/LoginGate";
import RegisterGate from "./pages/RegisterGate";
import LoginMentor from "./pages/LoginMentor";
import LoginMentee from "./pages/LoginMentee";
import RegisterMentor from "./pages/RegisterMentor";
import RegisterMentee from "./pages/RegisterMentee";
import { AuthProvider } from "./hooks/useAuth";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Mentor from "./pages/Mentor";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App min-h-screen bg-gray-100">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/mentor-detail" component={Mentor} />
            <Route exact path="/login-gateaway" component={LoginGate} />
            <Route exact path="/register-gateaway" component={RegisterGate} />
            <Route exact path="/login-mentor" component={LoginMentor} />
            <Route exact path="/login-mentee" component={LoginMentee} />
            <Route exact path="/register-mentor" component={RegisterMentor} />
            <Route exact path="/register-mentee" component={RegisterMentee} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
