import Card from "../ui/Card";
import styles from "./UserList.module.css"

const UserList = (props) => {
    return (<Card className={styles.users}>
        <ul>
            {props.users.map((user) => <li key={props.id}>{user.name} - {user.age} year</li>)
            }
        </ul>
    </Card>)
}
export default UserList