import React from "react";
import "../Form.css";
// import Table from "./Table.js";

type Props = {
    onValChange: any;
    formInputData:any;
    handleSub: any;
  }
//   export const Header: React.FC<Props> = ({text, color}) => {
export const Form: React.FC<Props> = ({onValChange,formInputData,handleSub}) => {
    // console.log('props', props);

   const handleSubmit=(e:any) => {
     
        e.preventDefault();
             
        // let phone=document.getElementById("phone").value;
        // if(p?name=Deepti&address=eaga&gender=male&phoneno=121210&email=de%40gs.com&password=Innobit&education=graduationhone.length<10 || phone.length>10)
        // {
        //     alert("Phone no should be of 10 digits");
        //     return false;
        // }
        

        // let pass=document.getElementById("password").value;
       
        // if(pass.length<8 || pass.length>16 )  {

        //     document.getElementById("message").innerHTML="Password should be of 8 to 15 char long";
        //     return false;

        // }
        
        // console.log(pass);


        // var regex= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[formInputData0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
        
       

        //    if(pass.match(regex)) 
        //      {   
        //         return true;
        //      }

        //     else{
        //         document.getElementById("message").innerHTML="Password should contain atleast one Uppercase,lowercase,special char and a digit";
        //         return false;
        //     }
     
           console.log(3);   
        handleSub();
    }

  return (
   <div>
    
     <div className="main">
       
       <div className="container">
       <div id="logo">
           <img src="logo1.jpeg" id="logo-img" alt="#"/>
       </div>
       <h3>Sign in with your account</h3>
       
       <form action="" onSubmit={handleSubmit}>
       <div className="name">
           <label>Full Name: </label>
           <br/>
           <input type="text" id="name" name="name" onChange={onValChange} value={formInputData.name} placeholder="Enter your name" required/>
       </div>
       <br/>
       <div className="address"/>
           <label>Address: </label>
           <br/>
           <input type="text" name="address" onChange={onValChange} value={formInputData.address}  placeholder="Enter your Address" id="address"/>
       <div/>
       <br/>
       <div className="gender">
           <label>Gender: </label>
           <br/>
           <label htmlFor="male" >Male</label>
           <input type="radio" onChange={onValChange} className="gender" id="male" value="male" name="gender"/>
           
           <label htmlFor="female" >Female</label>
           <input type="radio" onChange={onValChange} className="gender" id="female" value="female" name="gender"/>
           
       </div>
       <br/>
       <div className="phone">
           <label>Phone Number: </label>
           <br/>
           <input type="number" name="phoneno" onChange={onValChange} value={formInputData.phoneno} placeholder="Enter your phone no" id="phone" required />
       </div>
       <br />
       <div className="email">
           <label>Email Id: </label>
           <br/>
           <input type="email" name="email" onChange={onValChange} value={formInputData.email} placeholder="Enter your Email Id" required/>
       </div>
       <br/>
       <div>
      
           <label>Password: </label>
           <span id="forgetpass"><a href="#">Forget Password?</a></span>
     
           <br/>
           <input type="text" name="password" onChange={onValChange} value={formInputData.password} id="password" placeholder="Enter your password" required />
           <br/>
           
           <div id = "message" > </div> <br/>
       </div>

       <br/>
       <div className="education">
           <label >Mark your highest qualifications: </label>
           <br/>
           <br/>
           <div className="ptalign">
           <label htmlFor="graduation">Graduation</label>
           <input type="radio" onChange={onValChange} id="graduation" value="graduation" name="education"/>
           </div>
           <br/>
           <div className="ptalign">
           <label htmlFor="high-school">High School</label>
           <input type="radio" onChange={onValChange} id="high-school" value="high-school" name="education"/>
           </div>
           <br/>
           <div className="ptalign">
           <label htmlFor="post-Graduation">Post-Graduation</label>
           <input type="radio" onChange={onValChange} id="post-Graduation" value="post-Graduation" name="education"/>
           </div>
           <br/>
           <div className="ptalign">
           <label htmlFor="phd">PHD</label>
           <input type="radio" onChange={onValChange} id="phd" value="phd" name="education"/>
           </div>
           <br/>
       </div>
       <br/>
       <button type="submit" onClick={handleSubmit} id="submit" value="Submit">Submit
        </button>
       <p            className="policy">Click to view <a href="#">Privacy Policy</a> and <a href="#">Terms of use </a> </p>
       <div className="accountq">
        <hr/>   
       <p>New to family Pro health?</p>
       <hr/>  
       </div>
       <input type="button" value="CREATE YOUR ACCOUNT" id="create_ac"/>
   </form>
       </div>
       </div>
       <footer>
           <a href="#" id="help">Help | Contact Us</a>
           <p>	&#169;2023 Family prohealth Inc. All rights reserved</p>
       </footer>
   </div>
  );
}

export default Form;