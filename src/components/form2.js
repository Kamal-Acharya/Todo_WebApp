import React, { useState }  from "react";
//In this we have used useState with object for diffrent input feild
//Only one Onchange event using prevValue as to get the previous inputFeild
const Simplified_Form=()=>{
    const [fullName,setfullName]=useState({
        fname:'',
        lname:'',
        email:'',
    });

    const inpuntEvent=(event)=>{
        //event hold anything happen to the the input
     console.log(event.target.value);
    console.log(event.target.name);

    const value=event.target.value;
    const name=event.target.name;

    setfullName((preValue)=>{
        //this preValue contains all the object elements
if(name==='firstname')
{
    return{
        fname:value,
        lname:preValue.lname,
        email:preValue.email,
    };
    
}
else if(name==='lastname')
{
    return{
        fname:preValue.fname,
        email:preValue.email,
        lname:value,
    };
    
}
else if(name==='emails')
{
    return{
        email:value,
        fname:preValue.fname,
        lname:preValue.lname,
       
    };
    
}
    })
    }

return (
    <>
    
    <form>
    <h2>{fullName.fname}  {fullName.lname} </h2>
    <p>{fullName.email}</p>
        <input
        type="text"
        name="firstname"
        // value={fullName.fname}
        onChange={inpuntEvent}/>
        <input
        type="text"
        name="lastname"
        // value={fullName.lname}
        onChange={inpuntEvent}/>
            <input
        type="text"
        name="emails"
        // value={fullName.lname}
        onChange={inpuntEvent}/>
        
    </form>
    </>
)
}

export default Simplified_Form;