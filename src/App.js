import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";



import About from "./components/AboutUs/About";
import Joinnow from "./components/JoinNow/Joinnow";
import Shop from "./components/Shop/Shop";


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Series from "./components/Series/Series";
import Adapter from "./components/AdapterSeries/Adapter";






function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/join">
            <Joinnow />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/adapter">
            <Adapter/>
          </Route>
          <Route path="/product">
            <Series/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
      
      
      
    </Router>

  
  );
}

export default App;
