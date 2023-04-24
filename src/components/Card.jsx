/* eslint-disable react/prop-types */
export default function Card(props) {
    return(
        <div className="card">
            <div className="item-image">
                <img src={props.img} alt="" className="card-image"/>
            </div>

            <div className="item-details">
                <p>{props.name}</p>
                <p className="item-cost">{props.cost}</p>
            </div>
            <div className="item-details">
                <p>{props.distance}</p>
                <p>{props.availability}</p>
            </div>
        </div>
        
    )
}