import { useState, useEffect } from 'react'
import { useAPI } from 'context'
import './style.css'

export const TrendingDishes = () => {
    const { getPopularDishes } = useAPI()
    const [popularDishes, setPopularDishes] = useState([])
    useEffect(() => {
        // set is called this way to double the content (doubling only works in react strictmode)
        getPopularDishes().then(dish => setPopularDishes(prev => [...prev, ...dish]))
    }, [])
  return (
    <>
        <h3 style={{marginBottom:'.5rem'}}>Popular Dishes</h3>
        <div id="dish-carousel">
            {popularDishes?.map((dish, index) => (
                <div className="dish-card" key={index}>
                    <p className="dish-card-name">{dish.name}</p>
                </div>
            ))}
        </div>
    </>
  )
}