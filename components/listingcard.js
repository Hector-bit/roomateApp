import React from 'react';

//how do you get images without having to have them all in the app???

function ListingCard(props){
    console.log('listing card', props);
    return(
        <div className='listingcard'>
            <h3>{props.title}</h3>
            <img src={props.image} alt='room image'/>
            <p>{props.description}</p>
        </div>
    )
}

export default ListingCard;