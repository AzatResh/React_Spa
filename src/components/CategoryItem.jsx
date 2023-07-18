import {Link} from 'react-router-dom';

function CategoryItem(props){
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;
    
    return(
        <div className="item">
            <div className="card">
            <img src={strCategoryThumb} className="card-img-top" alt="category"/>
                <div className="card-body">
                    <h5 className="card-title">{strCategory}</h5>
                    <p className="card-text">{strCategoryDescription.slice(0, 60)}...</p>
                    <hr />
                    <Link to={`/category${idCategory}`} className="btn btn-primary shadow-sm rounded bg-success">About</Link>
                </div>
            </div>
        </div>
    );
}

export {CategoryItem}