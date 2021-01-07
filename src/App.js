import './App.css';
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import SignUp from './components/SignUp';
import About from './components/About';
import Favorites from './components/foodtruck/Favorites'; 

function App() {
  return (
    <main>
    


      <Router>
      
      <Switch>
       
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Homepage" component={Homepage} />

        <Route path="/About" component={About} />
        <Route path="/Favorites" component={Favorites}/>
        
      </Switch>

      </Router>

   
    </main>
    
  );
}

export default App;
