    const Delete=(ind)=>{
     

       return setlastName((arr)=>{
            arr.filter((arrele,id)=>{

                return id!==ind;
            
            });
        });

    }