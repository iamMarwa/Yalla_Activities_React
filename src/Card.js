function Card(props) {
    return (
        <div className="card shadow-sm mx-2 mb-4" style={{width: 300, display: 'inline-block',borderRadius: '15px'}}>
        <img src={props.image} style={{width: 299, height:300, borderRadius: '15px'}}/>
        <div className="card-body">
            <p><strong>{props.title}</strong></p>
            <p className="card-text cardDetaileclips">{props.description}</p>
            <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">More Detials</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Book</button>
            </div>
            <small className="text-muted">{props.price}</small>
            </div>
        </div>
        </div>
    )
}

export default Card;