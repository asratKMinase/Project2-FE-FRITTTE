import axios from "axios";
import { useContext, useRef } from "react";
import { userContext } from "../../App";

export default function UpdateOrder() {

    const url = "http://localhost:9006";

    const [user, setUser] = useContext(userContext);

    const idInput = useRef();
    const orderDateInput  = useRef();
    const itemNameInput = useRef();
    const usernameInput = useRef();
    const commentInput = useRef();
    
    
    async function updateOrder() {
    console.log(user)
    console.log(user.username)
    


        const userOrderUpdate = {

            id: idInput.current.value,
            orderDate: orderDateInput.current.value,
            // itemNmae: itemNameInput.current.value,
            customerUsername: user.username,  
            comment: commentInput.current.value,
    };

        try {
                          
            const response = await axios.post(`${url}/updateOrder`, userOrderUpdate, {withCredentials: true});
            console.log(response)
            
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);    
        }
    }

    return (
        <>
                <h4>Please register below.</h4>
                <input placeholder="Enter id" ref={idInput}></input>
                <input placeholder="Enter order date" ref={orderDateInput}></input>
                <br></br>
                <br></br>
                <br></br>
                {/* <input placeholder="Enter item Name" ref={itemNameInput}></input> */}
                <input placeholder="Enter your comment" ref={commentInput}></input>
              
            
                <button onClick={updateOrder}>Update Order</button> 

        </>
    );
}
