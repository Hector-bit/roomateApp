import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListingCard from './listingcard';
import placeHolderImage from '../images/pexels-vecislavas-popa-1643383.jpg'



function ListingsPage(){

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

    return (
        <View style={styles.listingsPage}>
            <Text>this is the listings page</Text>
            <Text>the following are the available listings</Text>
            {tempArray.map(element => {
                return(
                    <ListingCard key={element.id} props={element}/>
                )
            })
            }                
        </View>        
    )

}

const styles = StyleSheet.create({
    listingsPage: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 4,
        borderColor: 'steelblue',
    }
})


export default ListingsPage;