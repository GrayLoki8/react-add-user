import Card from "../ui/Card";
import styles from './CreateUser.module.css'
import Button from "../ui/Button";
import {useState} from "react";
import ErrorModal from "../ui/ErrorModal";
const CreateUser=(props)=>{
   const [inputName,setInputName]=useState("");
    const [inputAge,setInputAge]= useState("");
    const[error,setError]=useState();
  const createUserHandler=(event)=>{
      event.preventDefault();
      if (inputName.trim().length===0 || inputAge.trim().length===0){
            setError({
                title:'Incorrect input',
                message:'Field cant be empty'
            });
          return;
      }
      if (+inputAge<1){
          setError({
              title:'Incorrect age',
              message:'Age must be greater than 0'
          });
          return;
      }
      props.onCreateUser(inputName,inputAge);
        setInputName("");
        setInputAge("");

  }
  const nameChangeHandler=(event)=>{
      setInputName(event.target.value);
  }
    const ageChangeHandler=(event)=>{
        setInputAge(event.target.value);
    }
    const errorHandler=()=>{
      setError(false);
    }
    return(
        <div>
            {error &&  <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/>}

    <Card className={styles.input}>
        <form onSubmit={createUserHandler} >
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" value={inputName}  onChange={nameChangeHandler}/>
            <label htmlFor="age">Age:</label>
            <input id="age" type="number" value={inputAge}  onChange={ageChangeHandler}/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
        </div>
    )
}
export default CreateUser