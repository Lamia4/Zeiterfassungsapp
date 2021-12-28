
import React, { useState } from "react";
import { LoggInContext } from "./Context/LoggInContext";
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import ShowPersonal from "./Pages/ShowPersonal";
import Payment from "./Pages/Payment";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const realAdmins = [{

    name: "Galip",
    password: "1234",
    admin: true,
},
{
    name: "Lamia",
    password: "1234",
    admin: true
}]

  const [userName, setUsername] = useState("");

  const [showProfile, setShowProfile] = useState (false); {/*wofür war nochmal das showprofile? */}

  const [password, setPassword] = useState ("");

  return (

    
    
    <div className="App">
       <BrowserRouter>

        
            <Switch>
          
      <LoggInContext.Provider value={{ userName, setUsername, showProfile, setShowProfile, password, setPassword }}>

          <Route exact path="/" component={Home}>
          { realAdmins.map(res => {
              return (userName === res.name && res.password === password && res.admin && showProfile ? <Redirect to="./homepage" /> : <Home/>)}) }
          </Route> 
          <Route exact path= { realAdmins.map ( res => { return (res.admin == true && res.password == password && res.name == userName? "/homepage" : "" )})} component={ Homepage }/>
          <Route  path= "/showpersonal" component={ShowPersonal} />
          {/* <Route exact path= { realAdmins.map ( res => { return (res.admin == true && res.password == password && res.name == userName? "/showpersonal" : "" )})} component={ShowPersonal} /> */}
          <Route exact path = { realAdmins.map ( res => { return (res.admin == true && res.password == password && res.name == userName? "/payment" : "" )})} component={Payment} />
          <Route exact path= { realAdmins.map ( res => { return (res.admin == true && res.password == password && res.name == userName? "/contact" : "" )})} component={Contact} />


          

         
      </LoggInContext.Provider>
        </Switch>
      </BrowserRouter>
      
    </div>



  );
}

export default App;
