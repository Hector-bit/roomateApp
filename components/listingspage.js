import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListingCard from './listingcard';
import { ScrollView } from 'react-native-gesture-handler';
import { NativeRouter, Routes, Route, Link, Outlet } from 'react-router-native';
import { getRooms } from './databaseFunctions';

export function ListingsPage(){

    allRooms = getRooms();


    return (
        <ScrollView style={styles.listingsPage}>
            <Text>this is the listings page</Text>
            <Text>the following are the available listings</Text>
                {allRooms.map(room => {
                    return(
                        <Link to={`/listings/${room.id}`} key={room.id}>
                        <ListingCard key={room.id} props={room}/>                        
                        </Link>

                    )
                })}  
            <Outlet/>
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