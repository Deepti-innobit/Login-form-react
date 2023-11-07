import React from 'react';
import {useState} from "react";
import Form from './Form';
import Table from './Table';

function Display(){
    const[tableData,setTableData]=useState([]);
    const[showtable,setShowtable]=useState(false);
    const[formInputData,setformInputData]=useState(
       {
        name:'',
        email:'',
        address:'',
        phoneno:'',
        gender:'',
        education:'',

        }
    );
    
    
    const onValChange=(evnt)=>{ 
        console.log(evnt); 
       
      setformInputData({...formInputData,[evnt.target.name]:evnt.target.value})
       
       
    }
   
     
    const handleSub= () =>{
        tableData.push(formInputData)
        console.log(1);
        // evnt.preventDefault();
        // const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
        // console.log("checkEmptyInput",checkEmptyInput,formInputData);
        
        //  const newData = (data)=>([...data, formInputData])
        //  console.log("newData",newData);
        //  setTableData([formInputData]);
        //  console.log("tableData",[formInputData]);
        //  const emptyInput= {fullName:'', emailAddress:'', phoneno:''}
        //  setformInputData(emptyInput)
        // }
        // console.log(2);
        
        setShowtable(true);
        
    }  

    // console.log('forminput parent', tableData);

    return(
<React.Fragment>
     
         {!showtable && <Form onValChange={onValChange} formInputData={formInputData} handleSub={handleSub}/>}
         
         {showtable && formInputData && <Table tableData={tableData}/>}
         
   
     </React.Fragment>

    );
}
export default Display;
