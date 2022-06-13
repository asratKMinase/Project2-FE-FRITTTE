import axios from "axios";
import { useRef } from "react";

export default function CrediteCardDelete() {
   
    const url = "http://localhost:9005";
    
    const creditCardInput = useRef();
 
    async function register() {
       
        const user = {
            creditecard: creditCardInput.current.value,
          
             
    };
        try {
            const response = await axios.delete(`${url}/addCreditCard`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>You can delete your account here</h4>
                <input placeholder="Enter credit card number" ref={creditCardInput}></input>
              
                            
                <button onClick={register}>Delete Credit Card</button>
        </>
    );
}
