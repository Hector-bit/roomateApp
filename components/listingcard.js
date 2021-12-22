import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//how do you get images without having to have them all in the app???

function ListingCard(props){
    console.log('listing card', props.props.title);
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
    },
    listingCardImage: {
        borderWidth: 4,
        borderColor: 'red',
        width: 70,
        height: 50,
    }
})

export default ListingCard;