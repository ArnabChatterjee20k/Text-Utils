import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
    const capitalise = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return <div>
        {/* since the passing value of alert is null so we are getting error. So we can do that if props is null or basically false dont render the alert */}
        {/* So we have to use js shortciruiting using && */}
        
        {/* Here if props.alert null then it evaluates false and evaluation pointer stops. If not null then it will go forward untill false appears to stop the pointer. Snce alert render can't be false so when alert is not null that means it is true then then pointer stops at the alert div only.  */}
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show position-absolute w-100`} role="alert">
            {/* We are removing the dismiss button as if the message dismissed then the message will not come again */}
            <strong className='p-3'>{capitalise(props.alert.type)}</strong>{capitalise(props.alert.message)}
        </div>}
    </div>;
}

Alert.prototype = {
    alert : PropTypes.object.isRequired,
}

Alert.defaultProps = {
    alert : {message:"Alert Message Here", type:"primary"},
}