
import './Appa.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  const [mode,SetMode]= useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(()=>{
        setAlert(null);
       },1500)
  }

   const toggleMode = ()=>{
    if(mode ==='light'){
      SetMode('dark')
      document.body.style.backgroundColor='#2c1b5d';
      showAlert("Dark mode has been enabled","success");
      //document.title='TextUtils - Dark Mode';
    }
    else{
      SetMode('light') 
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
     // document.title='TextUtils - light Mode';
    }

    
  }
  return (
    <>
{/* <Navbar title="textUtils" aboutText="About TextUtlis"/>
<Navbar/> */}
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
       <switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
             <TextForm  showAlert={showAlert} heading=" Try TextUtils - Word Counter ,Character Counter, Remove extra Spaces" mode={mode} />
          </Route>
        </switch>
 </div>
        </Router>
    </>
  );
}

export default App; 
  