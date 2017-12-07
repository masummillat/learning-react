import  React from  'react'
import Ingredient from "./Ingredient";

const IngredientList = ({list})=>
    <ul className="ingredient" >
        {list.map((ingredient,i)=>
            <Ingredient key ={i} {...ingredient}/>
        )}
    </ul>

export default IngredientList