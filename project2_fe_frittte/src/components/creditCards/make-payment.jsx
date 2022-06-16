import axios from "axios";
import { useRef } from "react";

export default function Payment() {
  

    const url = "http://localhost:9005/";
    

    const creditCardInput = useRef();
    const paymentInput = useRef();
    
  
    async function paynow() {

        const CCResponse = await axios.get(`${url}/findCard?findCard=${creditCardInput.current.value}`)
        
        const user = {

           creditCardNumber: CCResponse.data.creditCardNumber,
           creditCardName: CCResponse.data.creditCardName,
           cvv: CCResponse.data.cvv,
           expDate: CCResponse.data.expDate,
           limit: CCResponse.data.limit - paymentInput.current.value,
           customerUsername: CCResponse.data.customerUsername,
              
         };
                
             
    
        try {
            const response = await axios.put(`${url}updateLimit`, user);
            console.log(response.data);
         
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
                <h4>You can pay your balance here here.</h4>
                <br></br>
                <br></br>
                <br></br>
                <input placeholder="Enter creditCardInput username" ref={creditCardInput}></input>
                <br></br>
                <br></br>
                <input placeholder="creditCradNameInput" ref={paymentInput}></input>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={paynow}>Pay now</button>
               
        </>
    );
}
