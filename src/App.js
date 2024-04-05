import React ,{useState} from "react";
//build => folder create application as a static appliction , host build folder on server , optimize our appli , JS CSS => static file react serve store inside build folder
// import { Component } from "react";
import {BrowserRouter  , Routes ,Route} from "react-router-dom";

import './Index.css'; //app.js => component
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from "./components/Alert";
import Abouts from "./components/Abouts"

// let name="megha" ;
// let name = "<b>megha</b>"; //react sanitize external html so this html not resolve , write obj , img , conditional expression , ternery opertator here

//using app.js we manage whole application state so make dark mode button here
function App() {

  const [mode , setMode] = useState("light");
  const[alert , setAlert] = useState(null);

  const showAlert = (msg , type)=>{
    setAlert([{
      msag:msg,
      types:type,}
    ])

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
console.log(alert);

const removeBodyClasses = ()=>{
  document.body.classList.remove("bg-light");
  document.body.classList.remove("bg-dark");
  document.body.classList.remove("bg-warning");
  document.body.classList.remove("bg-success");
  document.body.classList.remove("bg-danger");
}

const plate =(clas)=>{
  setMode(clas);
  removeBodyClasses(); //click red then bgcolor is red , when click green then bgcolor green & bg-red remove
  //removeBodyClasses => remove all classes from docu.body
  console.log(clas);
 
    document.body.classList.add("bg-"+clas); //classList => give class to body

}

  const toggleMode =()=>{ //when go from dark to light or light to dark mode then "clas" is null

   
    if(mode === "light"){
     
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled" , "success");
      // document.title = "TextUtils - Dark mode"; // index.html "title" tag value change

      setInterval (()=>{
        document.title = "TextUtils is amazing" ; //this title run in every 2sec
      }, 2000);

      setInterval(()=>{
        document.title = "Install TextUtils now";
      },1500);
    }

    else  {
      setMode("light");
      
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled" , "success");
      // document.title = "TextUtils - lightMode";

    }
    
  }
  return (
    <>
       <BrowserRouter>
      
      <Navbar title="Textutils " about = "about us" mode = {mode} toggleMode={toggleMode} plate={plate}/> {/* pass props to navbar component , pass link ,obj ,img ,string etc  , mode => pass "mode" state to nav & navbar take it as a prop , mode can be dark or light
      1st navber show in all routes then below routes pages show ,so when click on nav then not reload
      
      */}

        <div className="me"  style={{height:"30px" }}>
      
  {alert && alert.map((el) => {
    return(
      <Alert msag = {el.msag} type = {el.types} />
    )
  })}
 </div>
 {/* heading="enter the text" mode={mode} showAlert = {showAlert}
  */}

 <Routes>
 <Route path= "/about" element = {<Abouts mode={mode}/>}/>
      <Route  path="/" element= {<Textform heading={"Enter the text"} mode={mode} showAlert = {showAlert}/>
    }/> 

        
        {/* <Route path="*" /> */}
      
      </Routes>

 </BrowserRouter>
 
      
    </>
  )
}
export default App;
//raect router don't work with gh-pages
// Create React App uses the homepage field to determine the root URL in the built HTML file.