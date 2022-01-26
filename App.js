import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';
import FirstPage from './component/pages/FirstPage';
import SecondPage from './component/pages/SecondPage';
import ThirdPage from './component/pages/ThirdPage';
import { createDrawerNavigator } from "@react-navigation/drawer"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.NavigationProps.toggleDrawer();
  }
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <MaterialCommunityIcons style={{ marginLeft: 20 }} name="menu" size={26} color="white" />
      </TouchableOpacity>
    </View>
  )

}

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage"
      screenOptions={{
        headerStyle: { backgroundColor: "#5f9ea0" },
        headerTintColor: "white",
        headerTitleSstyle: { fontWeight: "bold" },
        headerLeft: () => <NavigationDrawerStructure NavigationProps={navigation} />
      }}>
      <Stack.Screen
        name='FirstPage'
        component={FirstPage}
      />
    </Stack.Navigator>
  )
}

function seccondScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage"
      screenOptions={{
        headerStyle: { backgroundColor: "#5f9ea0" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => <NavigationDrawerStructure NavigationProps={navigation} />
      }}>
      <Stack.Screen
        name='SecondPage'
        component={SecondPage}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91263',
          itemStyle: { marginVertical: 5 }
        }}
      >
        <Drawer.Screen
          name="FirstPage"
          component={firstScreenStack}
          option={{ title: 'First Page' }}
        />
        <Drawer.Screen
          name="SecondPage"
          component={seccondScreenStack}
          option={{ title: 'Second Page' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

