import React from 'react';
import {HashRouter,Route} from "react-router-dom";
import Home from './routes/Home';
import About  from "./routes/About";
import Navigation from './routes/Navigation';
import Movie_detail from './components/Movie-detail';

function App(){
  return (<HashRouter>
    <Navigation />
    <Route path = "/" exact = {true} component = {Home} />
    <Route path = "/about" component = {About} />
    <Route path = "/:id" component = {Movie_detail} />
  </HashRouter>
  );
}

export default App;