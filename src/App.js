import './App.css';
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import SignUp from './components/SignUp';
import About from './components/About';
import Login from './components/login/Login';



function App() {
  return (
    <main>
    


      <Router>
      
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/Login" component={Login} />
        <Route path="/About" component={About} />
        
      </Switch>

      </Router>

   
    </main>
    
  );
}

export default App;
