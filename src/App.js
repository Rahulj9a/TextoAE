import "./App.css";
 /*  import About from "./components/About";   */
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
 
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
   
} from "react-router-dom" */

 

function App() {
  const [Mode, setMode] = useState("light"); //whether dark mode is enabled or not

  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>setalert(null),2000)
  }
  

  let toggleMode = (cls) => {
      
     
    document.body.classList.toggle('bg-'+cls)
    
   
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#112B3C";
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#EFEFEF";
      showAlert("Dark mode has been disabled", "success");
    }
  };

  return (
    <>
     {/*  <Router> */}
        <Navbar title="textoAE" mode={Mode} toggleMode={toggleMode} />
        {/*  Here Navbar is a component */}
        {/* here we are passing props */}
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route exact path="/"
              element={ */}<TextForm
                heading="Enter your text here"
                mode={Mode}
                showalert={showAlert}
              />{/* }
             />
            <Route exact path="/about"
              
              element={ */}{/* <About mode={Mode} /> */}{/* }
             />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
