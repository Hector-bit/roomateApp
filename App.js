import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import DashboardPage from './components/dashboardpage';
import ListingCard from './components/listingcard';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path='/'/>
        <Route exact path='/listings' component={listingsPage}/>
        <Route exact path='/profile'/>
      </View>
      <View style={styles.nav}>
          <Link to='/'><Text>DASHBOARD</Text></Link>
          <Link to='/listings'><Text>LISTINGS</Text></Link>
          <Link to='/profile'><Text>PROFILE</Text></Link>
        </View>
    </NativeRouter>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  }
});
