import './App.css';
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import SignUp from './components/SignUp';
import About from './components/About';


function App() {
  return (
    <main>
    


      <Router>
      
      <Switch>
       
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Homepage" component={Homepage} />
        
        <Route path="/About" component={About} />
        
      </Switch>

      </Router>

   
    </main>
    
  );
}

export default App;
