import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListingCard from './listingcard';
import placeHolderImage from '../images/pexels-vecislavas-popa-1643383.jpg'
import { ScrollView } from 'react-native-gesture-handler';
import { NativeRouter, Routes, Route, Link } from 'react-router-native';


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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            id:3,
            title: 'super room with 2 bathrooms',
            image: placeHolderImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 4,
            title: 'no rooms',
            image: placeHolderImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
    ]

    return (
        <ScrollView style={styles.listingsPage}>
            <Text>this is the listings page</Text>
            <Text>the following are the available listings</Text>
                {tempArray.map(element => {
                    return(
                        <ListingCard key={element.id} props={element}/>
                    )
                })}        
        </ScrollView>        
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