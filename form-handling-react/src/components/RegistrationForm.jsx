import { useState } from "react";

export default function RegistrationForm (){

    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleusernameChange=(e)=>{
        setUsername(e.target.value);
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    return(
<form action="">

    <input type="text" name="username" value={username} onChange={handleusernameChange} required/>
    <input type="text" name="email" value={email} onChange={handleEmailChange} required/>
    <input type="text" name="password" value={password} onChange={handlePasswordChange} required />

    <button type="submit">Submit</button>
</form>
    );

}