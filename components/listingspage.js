import React from 'react';
import ListingCard from './listingcard';
import placeHolderImage from '../images/pexels-vecislavas-popa-1643383.jpg'

tempArray = [
    {
        id:1,
        title: 'room listing uno',
        image: placeHolderImage,
        description: 'I have an extra room'
    },
    {
        id:2,
        title: 'another real room listing',
        image: placeHolderImage,
        description: 'extra two rooms'
    }
]

function ListingsPage(){
    return (
        <Text>
            <Text>this is the listingss page</Text>
            <Text>the following are the available listings</Text>
            <Text>{tempArray.forEach(element => {
                return(
                    <ListingCard props={element}/>
                )
            })
            }</Text>
        </Text>
    )
}