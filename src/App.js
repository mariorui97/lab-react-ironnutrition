import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import Total from './components/Total';

function App() {
  const [foods, setFoods] = useState(foodsJSON)
  const [showForm, setShowForm] = useState(false)
  const [foodsCopy, setFoodsCopy] = useState(foodsJSON)
  const [checkOut, setCheckout] = useState([])

  function handleSearch(event){
    let word = event.target.value

    let filteredFoods = foods.filter((food) => {
      return food.name.includes(word)
    })

    setFoodsCopy(filteredFoods)
  }

  function handleToggle(){
    setShowForm(!showForm)
  }

  function handleAddFood(event){
    event.preventDefault()  
    
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value
    } 
    setFoods([newFood, ...foods])
    setShowForm(false)
  }

  function handlePurchase(food, quantity){
    let checkoutFood = {
      name: food.name,
      quantity: quantity,
      calories: food.calories
    }

    setCheckout([checkoutFood, ...checkOut])
  }

  return (
    <div className="columns">
      <div className="column">
      <Search btnSearch={handleSearch}/>
    {showForm ? <AddFood btnSubmit={handleAddFood}/> :  <button onClick={handleToggle}>Add a food that you like!</button>}
    {
      foodsCopy.map((elem, index)=>{
        return <FoodBox key = {index} foods = {elem} btnClick={handlePurchase}/>
      })
    }
    </div>
    <div className="column">
      <Total checkOut={checkOut}/>
    </div>
    </div>
  );
}

export default App;
