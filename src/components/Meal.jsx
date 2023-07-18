import {Link} from 'react-router-dom';

function Meal(props){
    const {strMeal, strMealThumb, idMeal} = props;

    return(
        <div className="item">
            <div className="card">
            <img src={strMealThumb} className="card-img-top" alt="meal"/>
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <hr />
                    <Link to={`/meal/${idMeal}`} className="btn btn-primary shadow-sm rounded bg-success">Watch recept</Link>
                </div>
            </div>
        </div>
    );
}
export {Meal};