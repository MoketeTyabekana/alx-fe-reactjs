import { useState } from "react";

export default function RegistrationForm (){

    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    

    return(
<form action="" onSubmit={handleSubmit}>

    <input type="text" name="username" value={username} onChange={handleChange} required/>
    <input type="text" name="email" value={email} onChange={handleChange} required/>
    <input type="text" name="password" value={password} onChange={handleChange} required />

    <button type="submit">Submit</button>
</form>
    );

}