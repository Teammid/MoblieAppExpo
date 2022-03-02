import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen';
import AboutScreen from './Screen/AboutScreen';
import ProductScreen from './Screen/ProductScreen';
import DetailScreen from './Screen/DetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from './Screen/MenuScreen';
import Register from './Screen/Register';
import LoginScreen from './Screen/LoginScreen';
import UserStoreProvider from './context/UserContext'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"a
      screenOptions={{
        
        headerStyle: {backgroundColor: '#F754D5'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
        
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'หน้าหลัก'}}
      />
        <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{title: 'สินค้า'}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'ลงทำเบียน'}}
      />
       <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'เข้าสู่ระบบ'}}
      />
    </Stack.Navigator>
  )
}
function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#F754D5' },
        headerTintColor: '#FFFF',
        headerTitleStyle: { fontWeight: 'bold' },
        
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen} options={{ title: 'สินค้า' }} />
       <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }} />
       <Stack.Screen name="Register" component={Register}options={{title: 'ลงทะเบียน'}}/>
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <UserStoreProvider>
      <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerPosition="left"
        drawerContent={(props)=><MenuScreen {...props}/>}
      >
        <Drawer.Screen name='Home' component ={HomeStack}/>
        <Drawer.Screen name='Product' component ={ProductStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </UserStoreProvider>
  )
}

export default App