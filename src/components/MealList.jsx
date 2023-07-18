import {Meal} from './Meal';

function MealList({meals}){
    return(
        <div className="list container pt-3">
            {meals.map((el)=>{
                return(<Meal key ={el.idMeal} {...el}/>)
            })}
        </div>
    )
}   
export {MealList};