import Card from "../ui/Card";
import styles from './CreateUser.module.css'
import Button from "../ui/Button";
import {Fragment,useRef, useState} from "react";
import ErrorModal from "../ui/ErrorModal";
const CreateUser=(props)=>{
   const nameInputRef= useRef();
   const ageInputRef= useRef();

    const[error,setError]=useState();
  const createUserHandler=(event)=>{
      event.preventDefault();
      const inputUserName=nameInputRef.current.value;
      const inputUserAge=ageInputRef.current.value;
      if (inputUserName.trim().length===0 || inputUserAge.trim().length===0){
            setError({
                title:'Incorrect input',
                message:'Field cant be empty'
            });
          return;
      }
      if (+inputUserAge<1){
          setError({
              title:'Incorrect age',
              message:'Age must be greater than 0'
          });
          return;
      }
      props.onCreateUser(inputUserName,inputUserAge);
      nameInputRef.current.value='';
      ageInputRef.current.value='';

  }

    const errorHandler=()=>{
      setError(false);
    }
    return(
        <Fragment>
            {error &&  <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/>}

    <Card className={styles.input}>
        <form onSubmit={createUserHandler} >
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" ref={nameInputRef}/>
            <label htmlFor="age">Age:</label>
            <input id="age" type="number"  ref={ageInputRef}/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
        </Fragment>
    )
}
export default CreateUser