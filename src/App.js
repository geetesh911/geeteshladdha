import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/style.css";
import { Home } from "./components/pages/Home";
import { Navbar } from "./components/layout/Navbar";
import { Border } from "./components/layout/Border";
import { Resume } from "./components/pages/Resume";
import { Projects } from "./components/pages/Projects";
import { Footer } from "./components/layout/Footer";
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <div className="main">
      <Router>
        <Border />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
