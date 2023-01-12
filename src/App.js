import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./hooks/userContext";
import { useMemo, useState } from "react";
import { AuthProvider } from "./hooks/useAuth";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Mentor from "./pages/Mentor";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

import LoginGate from "./pages/LoginGate";
import RegisterGate from "./pages/RegisterGate";
import LoginMentor from "./pages/LoginMentor";
import LoginMentee from "./pages/LoginMentee";
import RegisterMentor from "./pages/RegisterMentor";
import RegisterMentee from "./pages/RegisterMentee";
import Verification from "./pages/Verification";
import PaymentCode from "./pages/PaymentCode";

function App() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <AuthProvider>
      <Router>
        <div className="App min-h-screen bg-gray-100">
          <Navbar />
          <UserContext.Provider value={providerValue}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about-us" component={About} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/mentor-detail/:id" component={Mentor} />
              <Route exact path="/payment/:id" component={Payment} />
              <Route exact path="/paymentCode/:id" component={PaymentCode} />
              <Route exact path="/success/:id" component={Success} />
              {/* <Route exact path="/success" component={Success} /> */}
              <Route exact path="/login-gateaway" component={LoginGate} />
              <Route exact path="/register-gateaway" component={RegisterGate} />
              <Route exact path="/login-mentor" component={LoginMentor} />
              <Route exact path="/login-mentee" component={LoginMentee} />
              <Route exact path="/register-mentor" component={RegisterMentor} />
              <Route exact path="/register-mentee" component={RegisterMentee} />
              <Route exact path="/verification" component={Verification} />
            </Switch>
          </UserContext.Provider>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
