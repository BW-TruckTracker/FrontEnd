
import './App.css';
import Homepage from './components/homepage/Homepage'
import {Route} from 'react-router-dom'
import Nav from './components/Navbar'
import SignUp from './components/SignUp'
import LoginForm from './components/login'
import PrivateRoute from "./components/privateRoute"



function App() {
  return (
    <div className="App">
      <Nav />
     
      <Route path = '/signup' component={SignUp} />
      <Route path = '/login' component={LoginForm} />
      <PrivateRoute path = '/home' component={Homepage} />
    </div>
  );
}

export default App;


// import './App.css';
// import Homepage from './components/homepage/Homepage'
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import React from 'react';
// import SignUp from './components/SignUp';
// import About from './components/About';


// function App() {
//   return (
//     <main>
    


//       <Router>
      
//       <Switch>
       
//         <Route path="/SignUp" component={SignUp} />
//         <Route path="/Homepage" component={Homepage} />
        
//         <Route path="/About" component={About} />
        
//       </Switch>

//       </Router>

   
//     </main>
    
//   );
// }

// export default App;
