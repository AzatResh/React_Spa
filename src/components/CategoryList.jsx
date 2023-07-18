import {CategoryItem} from './CategoryItem';

function CategoryList(props){
    const {catalog} = props;
    
    return(
        <div className="list container pt-3">
            {catalog.map((el)=>{
                return(<CategoryItem key = {el.idCategory} {...el}/>)
            })}
        </div>
    );
}

export {CategoryList}