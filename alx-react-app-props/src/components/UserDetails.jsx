import React, { useContext } from 'react';
import UserContext from './UserContext';

export default function UserDetails({ UserContext }) {

    const user = useContext(UserContext);
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
  