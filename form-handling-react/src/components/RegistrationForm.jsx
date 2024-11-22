import { useState } from "react";

export default function RegistrationForm (){

    const [formData,setFormData]=useState({username:'',email:'',password:''});

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData(prevState=>({...prevState,[name]:value}));
    }



    return(
<form action="">
    <input type="text" name="name" value={formData.username} />
    <input type="text" name="email" value={formData.email} />
    <input type="text" name="password" value={formData.password} />

    <button type="submit">Submit</button>
</form>
    );

}