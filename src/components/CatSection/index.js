import React from 'react'
import {Fragment, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import CatCard from '../../CatCard'
const CatSection = () => {

    const [items, setItems] = useState([]);

    useEffect(
        function(){
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
                }
            )
            .catch(
                function(){
                    alert("Something went wrong. Please try again.")
                }
            )
        },
        [  ]
    )
    function createItem(obj){
        return (
            <CatCard 
                category={obj.category}
            />
        )
    }

    return(
        <Fragment>
            <div className="container" style={{minHeight: 'calc(100vh - 240px)'}}>
                <h1 className="my-5">Category</h1>

                <ul>
                    { items.map(createItem)}
                </ul>

                <Link to='/category' className="btn btn-outline-dark me-2">Load More</Link>
            </div>
            <br>
            </br><br></br>
        </Fragment>
    )
}

export default CatSection;
