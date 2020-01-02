import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import FoodList from './components/FoodList';

function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <FoodList/>
  
   </React.Fragment>
  );
}

export default App;
