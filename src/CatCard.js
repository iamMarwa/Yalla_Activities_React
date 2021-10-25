import React from 'react';
import Button from 'react-bootstrap/Button';
import {CatCard} from './CatCardElements';
function Card(props) {
    return (
        <CatCard className="card shadow-sm mx-2 mb-4 CatCard" style={{width: 200, display: 'inline-block',borderRadius: '15px', color: '#716ac8'}}>
        <div className="card-body">
            <p><strong>{props.category}</strong></p>
        </div>
        </CatCard>
    )
}

export default Card;