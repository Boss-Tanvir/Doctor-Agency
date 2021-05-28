import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import Home from './components/Home/Home/Home';
function App() {
  return (
   <Router>
     <Switch>
     <Route>
       <Home path="/"/>
     </Route>
     </Switch>
   </Router>
  );
}

export default App;
