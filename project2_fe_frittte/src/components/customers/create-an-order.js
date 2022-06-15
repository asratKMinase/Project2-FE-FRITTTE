import axios from "axios";
import { useRef, useContext } from "react";
import { userContext } from "../../App";

export default function CreateOrder() {

    const [user, setUser] = useContext(userContext);
    
    
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    
    

    async function newOrder() {
        const item = {
            
        
            orderDate: input1.current.value,
            itemName: input2.current.value,
            comment: input3.current.value,
            customerUsername: user.username
        };

        try {
            const response = await axios.post("http://localhost:9006/order", item, {withCredentials: true});
            
            console.log(response.data);
            
            
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
    }

    return (
        <>
            <h4>Order an item</h4>
            
            <input placeholder="Order Date" ref={input1}></input>
            <input placeholder="Item name" ref={input2}></input>
            <input placeholder="Comment" ref={input3}></input>
            <button onClick={newOrder}>Order</button>
            
        </>
    )
}