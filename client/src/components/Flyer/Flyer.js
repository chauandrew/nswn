import React, {useState} from 'react';

const Flyer = (props) => {
    const[isHovering, setHovering] = useState(false);

    /* The section containing flyer info that will only show up on hover */
    const flyerInfo = () => {
        return(
            isHovering &&
            <div className="flyer-info">
                <p>Event name: {props.eventName}</p>
                <p>Event time: {props.eventTime}</p>
                <p>Location: {props.location}</p>
            </div>
        );
    }

    return(
        <div className="flyer-container" 
        onMouseEnter={()=>{setHovering(true);}} 
        onMouseLeave={()=>{setHovering(false);}}>
            <img className="flyer-img" src={props.src} alt={props.alt}></img>
            {flyerInfo}
        </div>
    );
}

export default Flyer;