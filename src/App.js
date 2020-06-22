import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import Header from "./components/header/header.component";
import Jumbo from "./components/jumbo/jumbo.component";
import Jumbo2 from './components/jumbo2/jumbo2.component'
import Jumbo3 from './components/jumbo3/jumbo3.component'
import Courses from './components/courses/courses.component'
import Jumbo4 from './components/jumbo4/jumbo4.component'
import Footer from './components/footer/footer.component'


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Jumbo />
      <Jumbo2/>
      <Jumbo3/>
      <Courses/>
      <Jumbo4/>
      <Footer/>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
