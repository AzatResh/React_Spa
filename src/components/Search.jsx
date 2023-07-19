import {useState} from 'react';

function Search({callback = Function.prototype}){
    const [value, setValue] = useState();

    const handleKey = (event) => {
        if(event.key === 'Enter'){
            handleSubmit();
        }
    }

    const handleSubmit =() => {
        callback(value);
    }

    return(
        <div className="container input-group mt-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Recipient's username" 
                aria-label="Recipient's username" aria-describedby="button-addon2"
                onKeyDown={handleKey}
                onChange={(e)=>setValue(e.target.value)}
                value={value || ''}/>
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2"
                onClick={handleSubmit}>
                    Поиск
            </button>
        </div>
    )
}
export {Search};