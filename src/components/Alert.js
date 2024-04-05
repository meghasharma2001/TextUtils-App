import React from "react";
import "../Index.css";
function Alert(props) {
    const capitalize = (word) => {
        const lower = word;

        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }

    return (
        <>
            {/* <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>  props.alert &&*/}
   
                <div className={`alert alert-${props.type}`} role="alert">
                    <strong>{capitalize(props.type)}</strong> : {props.msag}
                    </div>
             
            
        </>
    )
}
export default Alert;