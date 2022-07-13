const CreateUser=(props)=>{
  const createUserHandler=(event)=>{
      event.preventDefault();

  }
    return(
        <form onSubmit={createUserHandler}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text"/>
            <label htmlFor="age">Age:</label>
            <input id="age" type="number"/>
            <button type="submit">Add user</button>
        </form>
    )
}
export default CreateUser