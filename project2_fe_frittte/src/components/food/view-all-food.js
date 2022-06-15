
import { useState, useRef } from "react";

export default function ViewAllFood() {
    
    const [itemName, setItemName] = useState()
    const [CHOCDF, setCHOCDF] = useState()
    const [ENERC_KCAL, setENERC_KCAL] = useState()
    const [FAT, setFAT] = useState()
    const [FIBTG, setFIBTG] = useState()
    const [PROCNT, setPROCNT] = useState()
    const itemInput = useRef();


    const [img, setImg] = useState();


    async function getItem(){
        const response = await axios(`https://api.edamam.com/api/food-database/v2/parser?app_id=16bdf670&app_key=%2016a8b4660a8d35e4fd58f088e9d5f5ea&ingr=${itemInput.current.value}&nutrition-type=cooking`)
        const item = response.data.parsed[0].food.label
        setItemName(item)
        const imgPic = response.data.parsed[0].food.image
        setImg(imgPic)
        const nutri1 = response.data.parsed[0].food.nutrients.CHOCDF
        const nutri2 = response.data.parsed[0].food.nutrients.ENERC_KCAL
        const nutri3 = response.data.parsed[0].food.nutrients.FAT
        const nutri4 = response.data.parsed[0].food.nutrients.FIBTG
        const nutri5 = response.data.parsed[0].food.nutrients.PROCNT
        setCHOCDF(nutri1)
        setENERC_KCAL(nutri2)
        setFAT(nutri3)
        setFIBTG(nutri4)
        setPROCNT(nutri5)
    }
    // const [foodBody, setFoodBody] = useState([]);

    // useEffect(() => {
    //     display();
    // }, []);

    // async function display() {
    //     try {
    //         const response = await fetch("http://localhost:9006/findAllFoodItems");
    //         const allFood = await response.json();
    //         const allFoodRows = allFood.map((e) => {
    //             return (
    //                 <tr>
    //                     <td>{e.itemName}</td>
    //                     <td>{e.cost}</td>
    //                 </tr>
    //             );
    //         });
    //         console.log(allFood);
    //         setFoodBody(allFoodRows);
    //     } catch (e) {
    //         console.error(e);

    //     }
    // }
    return (
        <>
            <h3>Search for a Food item</h3>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Type a Food to Search for it" ref={itemInput}></input>
            <button onClick={getItem}>Press to Find a Food item</button>
            <br></br>
            <h3>{itemName}</h3>
            <img src={img}></img>
            <h3>Cholesterol = {CHOCDF}</h3>
            <h3>Energy = {ENERC_KCAL}</h3>
            <h3>Fat = {FAT}</h3>
            <h3>Fiber = {FIBTG}</h3>
            <h3>Protien = {PROCNT}</h3>
            <br></br>
            <button>Order</button>
            {/* <div class="container">
                <table>
                    <tbody>{foodBody}</tbody>
                </table>
            </div> */}
            
        </>
    )
}