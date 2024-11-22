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

    <input type="text" name="name" value={formData.username} onChange={handleChange} required/>
    <input type="text" name="email" value={formData.email} onChange={handleChange} required/>
    <input type="text" name="password" value={formData.password} onChange={handleChange} required />

    <button type="submit">Submit</button>
</form>
    );

}