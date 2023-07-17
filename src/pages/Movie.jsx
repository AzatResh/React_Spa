import {useParams} from "react-router-dom";

function Movie(){
    const {id} = useParams();
    return(
        <h1>Movie: {id}</h1>
    );
}
export {Movie}