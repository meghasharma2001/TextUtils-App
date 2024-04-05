import React, {useState}from "react";

export default function Textform(props) {
   //  const [count,setCount] = useState(0); // initially state variable count = 0 , update "count" var using setCount funct without reload 

 const [text , setText] = useState(""); // text"state or state var" = enter text here , setText => update text var , useState => return text "1st parameter of useState" , setText "2nd parameter of useState" ,text& setText both update using array destrutring  /// setText("blue") means text = blue  , "text" state use in any function


 const handleclickUC = ()=>{
    console.log("UC was clicked")
   //  setText("you click on handle click UC"); //text = you click on handle click
   let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("converted to upper case" , "success");

 }

 const handleclickLC =()=>{
   let newText = text.toLowerCase();
   setText(newText);
   props.showAlert("converted to Lower case" , "success");
 }

 const handleclearclick = ()=>{
   let newText = " ";
   setText(newText);
   props.showAlert("text cleared" , "success");
 }

 const handlecopy = ()=>{
   console.log("i am copy");
   var text = document.getElementById("myBox");
   text.select();
  //  text.setSelectionRange(0,9999);
   
   navigator.clipboard.writeText(text.value); //Nvigator => api , directly put value in it & value copy
   console.log(text); //text => whole <textarea> tag , text.value => text wrriten inside textarea tag


   props.showAlert("copied to clipboard" , "success")
 }

 const handleExtraspaces = ()=>{
   let newText = text.split(/ [ ]+/); // [ ] => match blank space in text and split text into array of no space
   setText(newText.join(" ")); // join that array with one space

   props.showAlert("extra spaces removed" , "success");
 }


 const handleonchange =(event)=>{  //listen for "onchange" event then "handleonchange" funct run & with this func we get an event obj
    console.log("on chang"); //onchange funct run when write something in textarea , but without "event" obj nothing show

    setText(event.target.value); //imp when use input textarea , event.target.value => can type in textbox & onchnge func run ,text = prev text value + user write value
 }
 
    return (
        <>
        <div className = "me" style={{color : props.mode === "dark" ? "white" : "#042743"}}>
            <h1 className="mb-3">{props.heading}</h1>

            {/* <p>you clicked {count} times</p>
            <button onClick ={()=> setCount(count+1)}>state</button> 
            mb => margin bottom*/}

            <div className="mb-3" >
         
               <textarea className="form-control" id="myBox" value={text} onChange ={handleonchange} style ={{backgroundColor : props.mode === "dark" ? "#042743" : "white"  , color : props.mode === "dark" ? "white" : "#042743"}}rows="10"></textarea>   {/* handleonchange => when something change or write then this funct run , value={text} => "set state" so onchange() is necessary to update state when user write 
               style={{}} , 1st curly brace => JS , 2nd curly brace => in JS  write obj
               
               */}
               


            </div>

            <button className = "btn btn-primary mx-1 my-1" disabled = {text.length === 0 ? true : false} onClick={handleclickUC}> Convert To Uppercase</button>  {/*when click on button then handleclickUC funct run */}
            <button className = "btn btn-primary  mx-1 may-1" disabled = {text.length === 0} onClick={handleclickLC}> Convert To LowerCase</button> 

            <button  className = "btn btn-primary mx-1 my-1"  disabled = {text.length === 0} onClick={handleclearclick}> Clear Text </button> 
            <button  className = "btn btn-primary mx-1  my-1" disabled = {text.length === 0} onClick={handlecopy}> Copy Text </button> 
            <button  className = "btn btn-primary mx-1  my-1" disabled = {text.length === 0}  onClick={handleExtraspaces}> Remove extra spaces </button> 
            
          <div className = "container my-3">  
               <h2>your text summary</h2>
               {/* remove empty string from this array return by text.split , filter(take each element of array)=> if this function return true then only that element stay in array 
               element.length != 0 => if element length is 0 then that element not stay in array
               */}
             
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} Words and {text.length} characters</p>  {/* \st => split with more than one white space & newlines
                \s => any type of white space & new line */}
             
               <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>

               <h2>Preview</h2>
               <p>{text.length > 0 ? text : "enter something to preview"}</p>
            </div>

            {/*  my-2 => margin 2 in y-axis  , text.length => give no. of char  , text.split(space) => split text var with space , text.split => return array of total words , text.split("space").length  => give total no. of word if not write anything in textarea then also word count 1 becoz of space array length 1 
            
            total time to read = total no. of words * 1 word read in 0.008 minute
                              = text.split(" ").length * 0.008


            */}

</div>
        </>
    )

    
}




/* increasing no. of rows , whatever write inside textarea is state of component , we can use this content as a variable & whenever this var update then all the places where this var use will be updated , content become part of state

               props => pass to component
               state => belongs to component

               creatstate => 1st import usestate hook from react

               hooks => let us use "state" & other "react feature"  without writing class , in class based componet we can use many function , but in function based comp => use hook

                  
                  
                  
                  */