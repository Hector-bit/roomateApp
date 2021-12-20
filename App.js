import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Routes, Route, Link } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import DashboardPage from './components/dashboardpage';
import ListingsPage from './components/listingspage';
import ProfilePage from './components/profilepage';

export default function App() {

  const Dash = () => <Text>rtyu</Text>;
  const Testing = ListingsPage();

  return (
    <NativeRouter>
      <View style={styles.container}>

        
        <Routes>
          <Route path='/' element={DashboardPage}/>
          <Route path='listings' element={ListingsPage()}/>
          <Route path='profile' element={<Text>asdfasdfasdf</Text>}/>          
        </Routes>
      
        <View style={styles.nav}>
          <Link to='/'><Text>DASHBOARD</Text></Link>
          <Link to='/listings'><Text>LISTINGS</Text></Link>
          <Link to='/profile'><Text>PROFILE</Text></Link>
        </View>
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
    backgroundColor: 'red',
  }
});
