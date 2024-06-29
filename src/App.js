import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import Alert from './Component/Alert';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import ThemeSwitcher from './Component/ThemeSwitcher';

function App() {

  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{

    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null)
    },2000)

  }


  const [mode, setMode] = useState('light');

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')

  // }
  //For Light and DarkMode
  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)

    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = "#302c4a";
      showAlert("Dark mode has been enabled ", "success")  

 

    }else{
      setMode ('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled ", "success");   
    }

  }

  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar title="TEXT-UTILS"    aboutText="About" mode = {mode}  toggleMode={toggleMode} />
                <Alert alert={alert}/>
                <TextForm mode = {mode} heading="Enter text to Manipulate it!"/>
                
                </>
    },
    {
      path: "/about",
      element:<><Navbar title="TEXT-UTILS"  aboutText="About" mode = {mode}  toggleMode={toggleMode} />
                <About mode = {mode}/>
                </>
    },

  ])

  //Al Functions
  return (
    <>
     {/* <Navbar title="TEXT-UTILS" aboutText="About" mode = {mode}  toggleMode={toggleMode} /> */}
     <RouterProvider router={router} />
     {/* <Alert alert={alert}/> */}
     <div className="container my-3">
     </div>
     {/* <ThemeSwitcher/>  */}
    </>
   
  );
}

export default App;
