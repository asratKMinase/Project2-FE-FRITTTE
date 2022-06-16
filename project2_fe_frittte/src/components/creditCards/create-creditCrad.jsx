import axios from "axios";
import { useRef } from "react";
import { useState, useEffect } from "react";

export default function CrdeiteCardRegister() {

    const url = "http://localhost:9005";

    const urlCustomer = "http://localhost:9005/findCustomer?id=";

    const creditCardInput = useRef();
    const creditCradNameInput  = useRef();
    const cvvInput = useRef();
    const expDateInput = useRef();
    const limitInput = useRef();
    const usernameInput = useRef();

    const [customerBody, setCustomerBody] = useState([]);

    // useEffect(() => {
    //     getCustomer();
    // }, []);
   
        // async function getCustomer() {
        //     try {
        //         const response = await fetch("http://localhost:9005/findCustomer?id=tester");
        //         ;
        //        console.log(await response.json());
        
        //         setCustomerBody(await response.json().data);
        //     } catch (e) {
        //         console.error(e);
    
        //     }
        // }

    async function register() {

        console.log(customerBody);
          
        const user = {
            creditCardNumber: creditCardInput.current.value,
            creditCardName: creditCradNameInput.current.value,
            cvv: cvvInput.current.value,
            expDate: expDateInput.current.value,
            limit: limitInput.current.value,
            customerUsername:"tester",    
    };

        try {
                          
            const response = await axios.post(`${url}/addCreditCard`, user);
            

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
                <input placeholder="Enter the limit on the card" ref={limitInput}></input>
                <input placeholder="Enter your username" ref={usernameInput}></input>
                 {/* Username :<output name={getCustomer}></output>  */}
               
                <br></br>                   
                <br></br>
                 <button onClick={register}>Add Credit Card</button> 

        </>
    );
}
