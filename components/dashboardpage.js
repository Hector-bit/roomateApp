import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DashboardPage(){
    return (
        <View style={styles.dashboardPage}>
            <Text style={styles.dashItemContainer}>Username89476</Text>
            <Text style={styles.dashItemContainer}>Random text or pop up blurb about the app or a listing</Text>
            <Text style={styles.dashItemContainer}>maybe a messageing section with </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dashboardPage: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 4,
        borderColor: 'green',
    },
    dashItemContainer: {
        borderWidth: 4,
        borderColor: 'red',
        padding: 4,
    }
})

export default DashboardPage;