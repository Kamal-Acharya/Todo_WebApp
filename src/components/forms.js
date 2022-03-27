import React, { useState } from 'react';
//In this we use diffrent state for diffrent input field
//in this two onChange event is used to make changes and show in the frontend
const Form=()=>{
    const [name,setName]=useState();
    const [lastname,setlastName]=useState();
const [end,endname]=useState();
const [end2,endname2]=useState();
    const Submit=(event)=>{
event.preventDefault();
endname(name);
endname2(lastname);

    }
    const inputEvent=(event)=>{
     setName(event.target.value);
    }
    const inputEvent2=(event)=>{
        setlastName(event.target.value);
       }

    return(
        <>
        <form onSubmit={Submit}>
            <h2>{end} {end2}</h2>
            <input type='text'
            value={name}
            onChange={inputEvent}/>
              <input type='text'
            value={lastname}
            onChange={inputEvent2}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Form;