import React from 'react';
import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_,i) => {
      return <BurgerIngredients key={igKey + i} type={igKey} />
    })
  }).reduce((accu,curr) => {
      return accu.concat(curr)
  },[]);
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please choose any ingredients</p>
  } 
  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}

export default Burger;