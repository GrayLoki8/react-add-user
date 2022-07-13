import Card from "../ui/Card";
import styles from './CreateUser.module.css'
import Button from "../ui/Button";
const CreateUser=(props)=>{
  const createUserHandler=(event)=>{
      event.preventDefault();

  }
    return(
        <Card className={styles.input}>
        <form onSubmit={createUserHandler} >
            <label htmlFor="name">Name:</label>
            <input id="name" type="text"/>
            <label htmlFor="age">Age:</label>
            <input id="age" type="number"/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    )
}
export default CreateUser