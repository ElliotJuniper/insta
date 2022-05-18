import { useState } from "react";
import { signUp } from "../utils";

export const LogForm = ({setUser}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        signUp(username, email, password)
      };

    return(
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setUsername(event.target.value)}/>
            <input onChange={(event) => setEmail(event.target.value)}/>
            <input onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit"> Sign-Up</button>
        </form>
    )
}