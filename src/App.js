import React from "react";
import CreateUser from "./components/users/CreateUser";
import UserList from "./components/users/UserList";

function App() {
  return (
      <div>
        <CreateUser/>
        <UserList users={[]}/>
      </div>
  )
}

export default App;
