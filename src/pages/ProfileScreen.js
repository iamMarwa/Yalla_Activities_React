import React, { useContext } from 'react';
import NavBar from '../components/Navbar/index';
import { useEffect, useState} from 'react'
import "./ProfileCard.css";
import ActCard from '../ActCard';
// Connect to the context (i.e, global state)
import {UserContext} from '../UserContext';

function ProfileScreen(props) {
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
            <ActCard 
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


    const { firstname, lastname, email, avatar, updateUser } = useContext(UserContext);

    return (
<div className="container">
                <h1 className="my-5">My Profile</h1>
<div className="card-container">
<header>
    <img src={avatar} alt={firstname} className="imgPro" />
</header>
<h1 className="bold-text">
{firstname}  {lastname}
</h1>
<h2 className="normal-text">{email}</h2>
</div>
<h1 className="my-5">My Activities</h1>
<div className="card-container">
<br></br><br></br>

<ul>
                    { items.map(createItem)}
                </ul>
                { loading === true && <div className="loader"><br></br><br></br>
</div>  }

                <button onClick={onLoadMore} className="btn btn-outline-dark me-2">Load More</button><br></br><br></br>

</div>
<br></br><br></br>
</div>
);
}

export default ProfileScreen;