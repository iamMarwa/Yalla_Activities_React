import {Fragment, useEffect, useState} from 'react'
import Card from './Card';
function ListingScreen(){

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
        if (!obj.imageUrl) return;
        return (
            <Card 
                image={obj.imageUrl}
                title={obj.name}
                description={obj.description}
                price={obj.price + ' SAR'}
            />
        )
    }
    function onLoadMore() {
        setNextPost(nextPost + 1);
    }

    return(
        <Fragment>
            <div className="container" style={{minHeight: 'calc(100vh - 240px)'}}>
                <h1 className="my-5">Listing</h1>

                <ul>
                    { items.map(createItem)}
                </ul>
                { loading === true && <div className="loader"></div>  }

                <button onClick={onLoadMore} className="btn btn-primary">Load More</button>
            </div>
        </Fragment>
    )
}

export default ListingScreen;
