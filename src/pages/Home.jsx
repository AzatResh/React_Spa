import {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {getAllCategories} from '../api';
import {Preloader} from '../components/Preloader';
import {CategoryList} from '../components/CategoryList';
import {Search} from '../components/Search';

function Home(){

    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {pathname, search} = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(
                (item)=> item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate({
            pathname: pathname,
            search: `search=${str}`
        });
    }

    useEffect(()=>{
        console.log(search.split('=')[1]);
        getAllCategories().then((data)=>{
            setCatalog(data.categories);
            setFilteredCatalog(search? data.categories.filter(
                (item)=> item.strCategory
                    .toLowerCase()
                    .includes(search.split('=')[1].toLowerCase())
            ): data.categories) ;
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return(
        <>
        <Search callback={handleSearch}/>
        {catalog.length == 0?
            (<Preloader/>) :
            (<CategoryList catalog = {filteredCatalog}/>)}
        </>
    );
}
export {Home}