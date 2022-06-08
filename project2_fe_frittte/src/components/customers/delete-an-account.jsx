import axios from "axios";
import { useRef } from "react";

export default function AccountDelete() {
   
    const url = "xxxxxxxxxxxxxxx?username=";
    
    const usernameInput = useRef();
 
    async function register() {
       
        const user = {
            username: usernameInput.current.value,
          
             
    };
        try {
            const response = await axios.delete(`${url} ${xxx}`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>You can delete your account here</h4>
                <input placeholder="Enter item name" ref={usernameInput}></input>
              
                            
                <button onClick={register}>Delete</button>
        </>
    );
}
