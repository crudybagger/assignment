import { useAPI } from "context";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList";
import './style.css';
let description = "Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire."
export const Ingredients = () => {
    const [dish, setDish] = useState();

    const {dishId} = useParams();
    const {getDishDetails} = useAPI();

    useEffect(() => {
        getDishDetails(dishId)
            .then(dish => setDish({...dish, description : description}))
    }, [])
    return (
        <div id="ingredients-container">
            <div id="top-container">
                <h1 id="dish-name">{dish?.name}</h1>
                <p id="dish-description">{dish?.description}</p>
                <div id="dish-time-to-prepare">
                    <img src={process.env.PUBLIC_URL + "/assets/Set_time-01.svg"} alt="" />
                    <div>{dish?.timeToPrepare}</div>
                </div>
            </div>
            <img src={process.env.PUBLIC_URL + "/assets/Mask Group 17.png"} alt="" id="ingredient-image-1"/>
            <img src={process.env.PUBLIC_URL + "/assets/Ingredient2.png"} alt="" id="ingredient-image-2"/>
            <div id='watermark'></div>
            <div id="dish-ingredients">
                <h2>Ingredients</h2>
                <p>For 2 people</p>
                <hr />
                <h3>Vegetables</h3>
                <ItemList items={dish?.ingredients.vegetables} />
                <h3>Spices</h3>
                <ItemList items={dish?.ingredients.spices} />
                <h3>Appliances</h3>
                <div id="appliance-list">
                    {dish?.ingredients.appliances.map(appliance => {
                        return (
                            <div className="appliance-card" key={appliance.name}>
                                <img src={process.env.PUBLIC_URL + "/assets/Mask Group 20.png"} alt="" />
                                <div className="appliance-name">{appliance.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}