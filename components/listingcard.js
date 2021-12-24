import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link, NativeRouter, Routes, Route } from 'react-router-native';
import RoomInfo from './roomInfo';

//how do you get images without having to have them all in the app???

function ListingCard(props){
    return(
        <View style={styles.listingCard}>
            <Text>{props.props.title}</Text>
                <Image style={styles.listingCardImage} source={props.props.image}/>
            <Text>{props.props.description}</Text>   
        </View>

    )
}

const styles = StyleSheet.create({
    listingCard: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 4,
        borderColor: 'green',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
    },
    listingCardImage: {
        borderWidth: 4,
        borderColor: 'red',
        width: 340,
        height: 240,
    }
})

export default ListingCard;