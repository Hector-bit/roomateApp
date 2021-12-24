import React from 'react';
import { NativeRouter, Routes, Route, Link, useParams } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import { getRoomId } from './databaseFunctions';

function RoomInfo(){
    let { params } = useParams();
    let roominfo = 'nothing'
    console.log('look at this new room', roominfo, params, params);
    return (
        <View>
            <Text>
                nothing to see here, this is a work in progress, room id: { params }
            </Text>
        </View>        
    )

}

export default RoomInfo;