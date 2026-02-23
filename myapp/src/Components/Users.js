import React from "react";
import {Link} from 'react-router-dom'

export default function Users() {
    const users =[
        {id:1,name:"Sakshi"},
        {id:2,name:"Rajat"}
    ]
  return (
    <div>
    
      <h1>User List</h1>
      {users.map(user=>(
        <div key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}
