import {Fragment, useEffect, useState} from 'react'
import CatCard from '../CatCard';
function CategoryScreen(){

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [nextPost, setNextPost] = useState(1);

    useEffect(
        function(){
            setLoading(true);
            fetch('http://localhost:3001/activities/view')
            .then(
                function(backendResponse){
                    return backendResponse.json()
                }
            )
            .then(
                function(json){
                    const moreItems = [...items, ...json]
                    setItems(moreItems);
                    setLoading(false);
                }
            )
            .catch(
                function(){
                    alert("Something went wrong. Please try again.")
                }
            )
        },
        [ nextPost ]
    )
    function createItem(obj){
        return (
            <CatCard 
                category={obj.category}
            />
        )
    }
    function onLoadMore() {
        setNextPost(nextPost + 1);
    }

    return(
        <Fragment>
            <div className="container" style={{minHeight: 'calc(100vh - 240px)'}}>
                <h1 className="my-5">Category</h1>

                <ul>
                    { items.map(createItem)}
                </ul>
                { loading === true && <div className="loader"></div>  }

                <button onClick={onLoadMore} className="btn btn-outline-dark me-2">Load More</button>
            </div>
            <br>
            </br><br></br>
        </Fragment>
    )
}
export default CategoryScreen;