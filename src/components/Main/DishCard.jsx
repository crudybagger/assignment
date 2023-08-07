import { Link } from "react-router-dom"

export const DishCard = ({dish}) => {
    return (
        <div className="dishcard-container">
        <div className="dishcard-left-container">
            <div className="dishcard-name">
                <h3 className="dishcard-heading">{dish.name}</h3>
                <img src={process.env.PUBLIC_URL + "/assets/Group359.svg"} alt="" />
                <button className="dishcard-rating">
                    {dish.rating}
                    <img src={process.env.PUBLIC_URL + "/assets/Star.svg"} alt=""/>
                </button>
            </div>
            <div className="dish-contents">
                <div className="dish-equipments">
                    {dish.equipments.map(equipment => {
                        return (
                            <div className="dish-equipment" key={equipment}>
                                <img src={process.env.PUBLIC_URL + "/assets/Group 508.svg"} alt="" />
                                <p>{equipment}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="dishcard-ingredients-button">
                    <strong>Ingredients</strong>
                    <Link to={"ingredients/"+`${dish.id}`}>View List </Link>
                </div>
            </div>
            <div className="dishcard-description">{dish.description}</div>
        </div>
        <div className="dishcard-right-container">
            <img src={`${dish.image}`} alt="dish-image" className="dishcard-image"/>
        </div>
        
        </div>
    )
}