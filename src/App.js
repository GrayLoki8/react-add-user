import React, {useState} from "react";
import CreateUser from "./components/users/CreateUser";
import UserList from "./components/users/UserList";

function App() {
 const[userList,setUserList]= useState([]);
    const createUserHandler=(name,age)=>{
        setUserList((prevState => {
        return[...prevState,{name:name,age:age,id:Math.random().toString()}];
        }))
    }
    return (
      <div>
        <CreateUser onCreateUser={createUserHandler}/>
        <UserList users={userList}/>
      </div>
  )
}

export default App;
