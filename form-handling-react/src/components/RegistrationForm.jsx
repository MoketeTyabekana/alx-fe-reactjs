import { useState } from "react";

export default function RegistrationForm (){

    const [formData,setFormData]=useState({username:'',email:'',password:''});

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData(prevState=>({...prevState,[name]:value}));
    }

   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
   }

    return(
<form action="" onSubmit={handleSubmit}>

    <input type="text" name="name" value={username} onChange={handleChange} required/>
    <input type="text" name="email" value={email} onChange={handleChange} required/>
    <input type="text" name="password" value={password} onChange={handleChange} required />

    <button type="submit">Submit</button>
</form>
    );

}