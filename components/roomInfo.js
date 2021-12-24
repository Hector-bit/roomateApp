import React from 'react';
import { NativeRouter, Routes, Route, Link, useParams, Outlet} from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import { getRoomId } from './databaseFunctions';

function RoomInfo(){
    let { roomid } = useParams();
    let roominfo = 'nothing'
    console.log('look at this new room', roominfo, roomid);
    return (
        <View>
            <Text>
                nothing to see here, this is a work in progress, room id: { roomid }
            </Text>
            <Outlet/>
        </View>        
    )

}

export default RoomInfo;