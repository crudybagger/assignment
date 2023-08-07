import { DishList } from 'components';
import './style.css';

export const Selector = () => {
    return (
        <div id='selector-bar'>
            <select id='dropdown'>
                <option>Recommmended</option>
                <option>Price : Low to High</option>
                <option>Price : High to Low</option>
            </select>
            <button id='menu-button'>
                Menu
            </button>
        </div>
    )
}

export const Main = () => {
    return (
        <div id='main'>
        <Selector />
        <DishList />
        </div>
    )
}
