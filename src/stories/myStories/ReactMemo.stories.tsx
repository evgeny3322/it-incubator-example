import React, {useState} from "react"
import SelfControlledAccordion from "../../components/SelfControlledAccordion/SelfControlledAccordion";

export default {
    title: 'components/React.memo demo',
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const ExampleReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["NameRE", "NameWe", "NameIU"])
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>

}