import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
