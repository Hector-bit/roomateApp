import React from 'react';

//how do you get images without having to have them all in the app???

function ListingCard(props){
    console.log('listing card', props);
    return(
        
        <Text>
            <Text>{props.title}</Text>
            <img src={props.image} alt='room image'/>
            <Text>{props.description}</Text>            
        </Text>

    )
}

export default ListingCard;