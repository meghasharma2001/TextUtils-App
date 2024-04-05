// it is Navbar component => so 1st letter of component is capital , react funct based component

import React from "react";
import PropTypes from "prop-types";
import{Link} from "react-router-dom"; // using link => page not reload when click home , about ,TextUtils

export default function navbar(props) { //accept props here
  return (
    <>
      {/* navbar-${props.mode} => if "mode" value "dark" in app.js then dark navbar show vice versa */}

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode } `}>
        <div className="container-fluid">
          {
            <Link className="navbar-brand" to="/text">{props.title}</Link>/* js so write {} , props are read only can't change prop value here*/
            // <h2>{props.title}</h1>
          }
         
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style = {{color:props.mode === "dark" ? "white" : "#042743"}}>
            <div className="navbar-nav"  style = {{color:props.mode === "dark" ? "white" : "#042743"}}>
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/about">{props.about}</Link>
              <Link className="nav-link" to="/support">Support</Link>
              {/* <a className="nav-Link disabled">Disabled</a> */}
            </div>
          </div>
        </div>

           {/* text-light => className in bootstap so "Enable dark mode" it show light */}

     <div className={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick ={()=>props.toggleMode(null)}/>   {/*if click this button then toggleMode funct run i.e inside app.js , toggle button it is  */}
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === "light" ? "enable dark mode" : "enable light mode"}`}</label>
        </div>   

      {/* <div className="d-flex">   {/*color plate 
          <div className="bg-primary rounded mx-2" onClick={()=>{props.plate("primary")}} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div>

          <div className="bg-danger rounded mx-2" onClick={()=>{props.plate("danger")}} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div>

          <div className="bg-success rounded mx-2" onClick={()=>{props.plate("success")}} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div>

          <div className="bg-warning rounded mx-2" onClick={()=>{props.plate("warning")}} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div>  {/*onclick => only need function not a function call so make toogle mode function a arrow func */}
 {/*
       <div className="bg-light rounded mx-2" onClick={()=>{props.plate("light")}} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div>  {/*onclick => only need function not a function call so make toogle mode function a arrow func */} 

       {/* <div className="bg-dark rounded mx-2" onClick={()=>{props.plate("dark")}} style={{height:"30px", width:"30px" ,cursor:"pointer"}}></div> 

        </div>  */}
      </nav>

    </>
  )


}
// navbar.defaultProps ={ //if no props pass by app.js file then these default values set
//   title:"set title here",
//   about:"about text here",
// };
navbar.propTypes = {
  title: PropTypes.string.isRequired, //necessary to send title prop value 
  about: PropTypes.string,
};
