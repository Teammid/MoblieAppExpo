import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, Image } from 'react-native';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomSidebarMenu from './pages/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=>{
  //define Structure for navigation Drawer
  const toggleDrawer = () =>{
    props.navigationProps.toggleDrawer();
  }

  return(
    <View style = {{flexDirection: 'row'}}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Image 
          source={require('./asset/drawerWhite.png')}
          style={{width: 25, height: 25, marginLeft: 5}}
       />
      </TouchableOpacity>

    </View>
  )
}

function FirstScreenStack({navigation}){
  return(
    <Stack.Navigator
      initialRouteName= 'FirstPage'
      screenOptions={{
        headerStyle:{backgroundColor: '#f4511e'}, 
        headerTintColor: '#FFFF', 
        headerTitleStyle: {fontWeight: 'bold'}, 
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>
    }}
    >
      <Stack.Screen 
        name= 'FirstPage' 
        component={FirstPage}
        options={{title: 'FIRST PAGE'}}
      />
    </Stack.Navigator>
  );
}

function SecondScreenStack({navigation}){
  return(
    <Stack.Navigator
      initialRouteName= 'FirstPage'
      screenOptions={{
        headerStyle:{backgroundColor: '#f4511e'}, 
        headerTintColor: '#FFFF', 
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation}/>
      }}
    >
      <Stack.Screen 
        name= 'SecondPage' 
        component={SecondPage}
        options={{title: 'SECOND PAGE'}}
      />
      <Stack.Screen 
       name= 'ThirdPage' 
        component={ThirdPage}
        options={{title: 'THIRD PAGE'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          ItemStyle: {marginVertical: 5}
      }}
      drawerContent = {(props)=> <CustomSidebarMenu{...props}/>}

      >
        <Drawer.Screen name='FirstPage' component ={FirstScreenStack}/>
        <Drawer.Screen name='SecondPage' component ={SecondScreenStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//       screenOptions={({route})=>({
//         tabBarIcon :({focused,color})=>{
//           let iconName;
//           if(route.name === 'Home'){
//             iconName = focused 
//             ?'ios-information-circle' 
//             : 'ios-information-circle-outline';
//           }else if (route.name === 'Settings'){
//           iconName = focused
//           ?'ios-list-box'
//           :'ios-list';
//           }
//           return <Ionicons name = {iconName} color = {color}/>
//         }
//       })}
//       tabBarOptions = {{
//         activeTintColor:'tomato',
//         inactiveTintColor : 'gray'
//       }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


