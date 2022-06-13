
import { useState, useEffect } from "react";

export default function ViewAllFood() {
    
    const [foodBody, setFoodBody] = useState([]);

    useEffect(() => {
        display();
    }, []);

    async function display() {
        try {
            const response = await fetch("http://localhost:9006/findAllFoodItems");
            const allFood = await response.json();
            const allFoodRows = allFood.map((e) => {
                return (
                    <tr>
                        <td>{e.itemName}</td>
                        <td>{e.cost}</td>
                    </tr>
                );
            });
            console.log(allFood);
            setFoodBody(allFoodRows);
        } catch (e) {
            console.error(e);

        }
    }
    return (
        <>
            <h3>Here is the food list</h3>
            
            
            <div class="container">
                <table>
                    <tbody>{foodBody}</tbody>
                </table>
            </div>
            
        </>
    )
}