import './App.css';
import Homepage from './components/homepage/Homepage'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React from 'react';
import SignUp from './components/SignUp';
import About from './components/About';


function App() {
  return (
    <main>
    

      {/* <Link to='/Login'></link> */}

      <Router>
      
      <Switch>
        {/* <Route exact path="/exact" component={Home}/> */}
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Homepage" component={Homepage} />
        {/* <Route path="/Login" component={Login} /> */}
        <Route path="/About" component={About} />
        
      </Switch>

      </Router>

    {/* <div className="App">
      <Homepage />
    </div> */}
    </main>
    
  );
}

export default App;
