import axios from "axios";
import { useRef } from "react";

export default function CrdeiteCardRegister() {
  

    const url = " ";
    

    const creditCardInput = useRef();
    const creditCradNameInput  = useRef();
    const cvvInput = useRef();
    const expDateInput = useRef();
    const zipInput = useRef();
    const limitInput = useRef();
    const customerUsernameInput = useRef();
  
    async function register() {
        
        const user = {
            creditcard: creditCardInput.current.value,
            creditcardname: creditCradNameInput.current.value,
            cvv: cvvInput.current.value,
            expirationdate: expDateInput.current.value,
            zip: zipInput.current.value,
            limit: limitInput.current.value,
            customerusername: customerUsernameInput.current.value,
             
    };
        try {
            const response = await axios.post(`${url}/customers`, user);
            console.log(response.data);
         
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>Please register below.</h4>
                <input type = "credit card" placeholder="Enter credit card number" ref={creditCardInput}></input>
                <input placeholder="Enter name on the credit card number" ref={creditCradNameInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Enter CVV from the backend of the card" ref={cvvInput}></input>
                <input placeholder="Enter expiration date" ref={expDateInput}></input>
                <br></br>               
                <br></br>
                <br></br>
                <input placeholder="Enter zip code" ref={zipInput}></input>
                <input placeholder="Enter the limit on the card" ref={limitInput}></input>
                <input placeholder="Enter your username" ref={customerUsernameInput}></input>

                <br></br>                   
                <br></br>
                <button onClick={register}>Add Credit Card</button>
        </>
    );
}
