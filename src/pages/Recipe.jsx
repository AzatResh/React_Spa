import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {getMealById} from '../api';
import {Preloader} from '../components/Preloader';

function Recipe(){
    const [recipe, setRecipe] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        getMealById(id).then((data)=>setRecipe(data.meals[0]));
    }, [id])

    return(
        <>
        { !recipe.idMeal ? (<Preloader/>):
            (<div className='recipe container pt-4'>
                <div className='info d-flex flex-row mb-2'>
                    <img className='me-4 w-50' src={recipe.strMealThumb} alt="meal" />
                    <div>
                        <h1>{recipe.strMeal}</h1>
                        <h6>Category: {recipe.strCategory}</h6>
                        {recipe.strArea? <h6>Area: {recipe.strArea}</h6> : null}
                        <p>{recipe.strInstructions}</p>
                    </div>
                </div>
                {recipe.strYoutube?
                   <div className='row'>
                    <h5>Video recipe</h5>
                    <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen title={id}></iframe>
                   </div> :null }
            </div>
            
            )}

        </>
    );

}
export{Recipe};