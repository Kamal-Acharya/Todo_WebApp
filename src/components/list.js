import React, { useState } from 'react';
import './Style.css';
const List=(props)=>{
const Delete=()=>{
    alert("deleted");
}
function myFunction(id) {
    // Get the checkbox
    var checkBox = document.getElementById(id);
    console.log("maa ka bhoda",checkBox);
    // alert(checkBox.checked);
    // Get the output text
    var text = document.getElementsByClassName("check_box");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked ===true){
        //traversing through object
        Object.entries(text).map((item,ind)=>{
            console.log(item[1].innerHTML.id);
            if(ind===id)
            {
                // console.log(item[1].style.textDecoration="line-through")
                item[1].style.opacity=0.5;
            }
            
            
            
        });
 
   
    } 
    else if(checkBox.checked===false)
    {    Object.entries(text).map((item,ind)=>{
        console.log(item[1].innerHTML.id);
        if(ind===id)
        {
            // console.log(item[1].style.textDecoration="line-through")
            item[1].style.opacity=1;
        }
        
        
        
    });

    }
    
  }

return(
    <>
     
    <div className="check">
                <label className="check_box"><h5>{props.text} </h5>
                <input id={props.id} type="checkbox" onClick={()=>myFunction(props.id)} />
                    <span className="checkmark"></span>
                    <button className='btn-delete' onClick={()=>{
        props.onSelect(props.id)
    }}>delete</button>
                </label>
                </div>
                
    </>
    
   
    
)
}
export default List;