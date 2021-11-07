import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import AboutMe from "./component/AboutMe/AboutMe";
import Blog from "./component/Blog/B_head/Blog";
import CheatSheets from "./component/Cheatsheet/CS_head/CheatSheets";
import Project from "./component/Project/P_head/Project";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <IndexRoute path="/blogs" component={Blog} />

          <Route path="/cheatsheets" component={CheatSheets} />

          <Route path="/projects" component={Project} />

          <Route path="/about-me" component={AboutMe} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
