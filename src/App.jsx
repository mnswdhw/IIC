import React from 'react';
import {Route,Link,Switch} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";



function App() {
  return (
    <div>
    <Navbar/>
    <Switch>
    <Route path="/gallery"><Gallery/></Route>
    <Route path="/contact"><Contact/></Route>
    <Route path="/activities"><Activities/></Route>
    <Route path="/"><Home/></Route>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
