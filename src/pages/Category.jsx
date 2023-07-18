import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getByCategory} from '../api';
import {Preloader} from '../components/Preloader';
import {MealList} from '../components/MealList';

function Category(){
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        getByCategory(name).then((data)=>{
            setMeals(data.meals);
        });
    }, [name])
    
    return(
        <>
        {meals.length == 0?
            (<Preloader/>) :
            (<MealList meals = {meals}/>)}
        </>
    )
}
export {Category};