import { useState } from "react";

export default function RegistrationForm (){

    const [formData,setFormData]=useState({name:'',email:'',password:''});



    return(
<form action="">
    <input type="text" name="name" value={} />
    <input type="text" name="email" value={} />
    <input type="text" name="password" value={} />

    <button type="submit">Submit</button>
</form>
    );

}