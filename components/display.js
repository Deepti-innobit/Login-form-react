import React from 'react';
import Form from "/src/form.js";
import { useState } from 'react';

const Display=()=>{

const[name,setName]=useState('');
const[add,setAdd]=useState('');
const[email,setEmail]=useState('');
const[phone,setPhone]=useState('');


const changeName=(e)=>{
    setName(e.target.value);
};

const changeAdd=()=>{
    setAdd(e.target.value);
};

return(
<>
<Form />
</>
);
}
export default Display;