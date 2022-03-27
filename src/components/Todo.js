import React, { useState } from 'react';
import List from  './list';
const Todo=()=>{
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [name,setName]=useState('');
    const [lastname,setlastName]=useState([]);

    const inputEvent=(event)=>{
setName(event.target.value);
    }
    const submit=(event)=>{
        event.preventDefault();
setlastName((prevValue)=>{
    return [...prevValue,name]
})
setName('');
    }
    //filtering the elemts using id
    const deleteItems=(id)=>{
 
  
   setlastName((arr)=>{
      return arr.filter((val,index)=>{
          return index!==id;
      });
  });
    }
    
    function filterCom() {
        const editedTaskList = lastname.map(task => {
        // if this task has the same ID as the edited task
     console.log(task);
        return task;
       
        });
        console.log(editedTaskList);
    
      }
 
    return(
        <>
           <div className="nav">
            <ul>
                <li onClick={filterCom}>All</li>
                <li >Completed</li>
                <li>UnCompleted</li>
                
            </ul>
        </div>
        <hr/>
        <div className='container'>
        <div className="date"><span>{event.toLocaleDateString('en-US',options)}</span></div>
        <form onSubmit={submit} className="form">
            <input
            type='text'
            className="search_bar"
            placeholder='enter the task'
            value={name}
            onChange={inputEvent}/>
            <button type='submit' className='btn'  >Click</button>
        </form>
      
       
        <ul className='ul-comp'>
            
                {lastname.map((val,index)=>{
                  return (
                      <div style={{margin:"2px"}} >

                      <List text={val} key={index} id={index} onSelect={deleteItems} />

                      </div>

                  ); 
                })}
            
        </ul>
        </div>
        </>
    );
}

export default Todo;