import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import LogoutPage from "./pages/LogoutPage";

import Projects from "./pages/Projects";
import CreateProjectPage from './pages/CreateProjectPage';
import EditProjectPage from './pages/EditProjectPage';



function App() {
  return (
    <Router>
     <div>
      <Nav />
        <Switch>
          <Route path="/login"> <LoginPage/> </Route>
          <Route path="/register"> <RegisterPage/> </Route>

          <Route path="/logout"> <LogoutPage/> </Route>

          <Route path="/project/:id"><ProjectPage /> </Route>
          <Route path="/projects"> <Projects/> </Route>
          <Route path="/createProject"> <CreateProjectPage/> </Route>
          <Route path="/editProject"> <EditProjectPage/> </Route>


          <Route path="/"> <HomePage /> </Route>
        </Switch>
      </div>
     </Router>
  );
}

export default App;
