import React, { Component} from "react";
import Snake from './Snake';
import Food from "./Food";
import Game from  './Game';
import Loyalt from "./Loyalt";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LiderBoard from "./LiderBoard";
import {LiderBoardRoute} from "./route/routes";
function App() {
  return(
    <Router>
      <Loyalt>
        <Switch>
         
          <Route path={LiderBoardRoute}>
           <LiderBoard></LiderBoard>
          </Route>
          <Route  exact>
           <Game></Game>
          </Route>
        </Switch>
      </Loyalt>
    </Router>
  )
}






export default App