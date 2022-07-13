import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css"
import {Fragment} from "react";
const ErrorModal=(props)=>{
    return (
    <Fragment>
        <div className={styles.backdrop} onClick={props.onCloseModal}></div>

        <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header >
        <div className={styles.content}>
            <h2>
                {props.message}
            </h2>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onCloseModal}>Close</Button>
        </footer>
    </Card>
    </Fragment>)
}
export default ErrorModal