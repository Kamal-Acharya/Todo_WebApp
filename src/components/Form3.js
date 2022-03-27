import React, { useState }  from "react";
//In this we have used useState with object for diffrent input feild
//Only one Onchange event using prevValue as to get the previous inputFeild

//here name and object elemt name should be same
//here we used ojbject destructiring to store te prevvalue
const Simplified_Form=()=>{
    const [fullName,setfullName]=useState({
        firstname:'',
        lastname:'',
        emails:'',
    });

    const inpuntEvent=(event)=>{
        //event hold anything happen to the the input
     console.log(event.target.value);
    console.log(event.target.name);

 const {value,name}=event.target;

    setfullName((preValue)=>{
        //this preValue contains all the object elements
        return{
            ...preValue,
            [name]:value,
        }


    })
    }

return (
    <>
    
    <form>
    <h2>{fullName.firstname}  {fullName.lastname} </h2>
    <p>{fullName.emails}</p>
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