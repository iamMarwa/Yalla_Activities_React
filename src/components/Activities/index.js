import React from 'react'
import {Fragment, useEffect, useState} from 'react'
import Icon1 from '../../images/svg-4.svg';
import  Icon2 from '../../images/svg-5.svg';
import Icon3  from '../../images/svg-6.svg';
import Card from '../../Card';
import {ActivitiesContainer,ActivitiesH1, ActivitiesWrapper,ActivitiesCard,ActivitiesIcon,ActivitiesH2,ActivitiesP} from './ActivityElements'
import { Link } from 'react-router-dom';
const Activities = () => {
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
        []
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


    return(
        <Fragment>
            <div className="container" style={{minHeight: 'calc(100vh - 240px)'}}>
                <h1 className="my-5">Activities</h1>

                <ul>
                    { items.map(createItem)}
                </ul>

                <Link to='/activities' className="btn btn-outline-dark me-2">Show More</Link>
                <br></br>
                <br></br>
            </div>

        </Fragment>
    )
}

export default Activities;
