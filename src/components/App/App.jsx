import './style.css';
import { Route, Routes } from 'react-router-dom';
import { DateTime, Navbar, CategoryBar, TrendingDishes, Main, Ingredients } from 'components';
export function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={
          <>
          <Navbar navHeading={"Select Dishes"}/>
          <DateTime />
          <CategoryBar />
          <TrendingDishes/>
          <hr />
          <Main/>
          </>
        }/>
        <Route path='/ingredients/:dishId' element={
        <>
          <div style={{height : '14px'}}></div>
          <Navbar navHeading={""}/>
          <Ingredients />
        </>
        } />
      </Routes>
      
    </div>
  );
}

