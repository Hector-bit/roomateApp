import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Routes, Route, Link } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import DashboardPage from './components/dashboardpage';
import ListingsPage from './components/listingspage';
import ProfilePage from './components/profilepage';

export default function App() {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.main}>
        <Routes>
          <Route path='/' element={DashboardPage()}/>
          <Route path='listings' element={ListingsPage()}/>
          <Route path='profile' element={ProfilePage()}/>          
        </Routes>          
        </View>

      
        <View style={styles.nav}>
          <Link style={styles.navButtons} to='/'><Text>DASHBOARD</Text></Link>
          <Link style={styles.navButtons} to='/listings'><Text>LISTINGS</Text></Link>
          <Link style={styles.navButtons} to='/profile'><Text>PROFILE</Text></Link>
        </View>
      </View>      
    </NativeRouter>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 9,
    padding: 20
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    borderWidth: 3,
    borderColor: '#20232a',
    backgroundColor: '#fff',
  },
  navButtons: {
    padding: 10
  }
});
