import React, { useState } from "react";

export default function About(props) {
    // const [mystyle, setStyle] = useState({  //mystyle= js obj , state var , setStyle funct => change state
    //     color: '#042743',
    //     backgroundColor: 'white',
    //     border: '2px solid white',

    // })

    // const [btntext, setBtnText] = useState("enable dark mode");

    // const toggleStyle = () => {  //this funct run when click on button "enable dark mode"
    //     if (mystyle.color === "#042743") {

    //         setStyle({
    //             color: 'white',
    //             backgroundColor: '#042743',
    //         })
    //         setBtnText("enable light mode ");
    //     }

    //     else {
    //         setStyle({
    //             color: '#042743',
    //             backgroundColor: 'white',
    //         })
    //         setBtnText("enable dark mode");
    //     }
    //  }

    let mystyle = {  //mystyle = obj
        color : props.mode === "dark" ? "white" : "#042743" ,
        backgroundColor : props.mode === "dark" ? "#042743" :"white"
    }

    return (
        <>
            <div className="container" >
            <h1 className="my-3" style = {{color:props.mode === "dark" ? "white" : "#042743"}}> About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                         <div className="accordion-body"style={mystyle}>   {/* {}=>js , mystyle => obj */}
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <div className="container"  >
                {/* <button onClick = {toggleStyle} type = "button" className="btn btn-primary" style={{marginTop :"7px"}}>{btntext}</button> */}
            </div>

        </>
    )
}