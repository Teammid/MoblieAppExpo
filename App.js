import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import FirstPage from './component/pages/firstpage';
import SecondPage from './component/pages/secondpage';
import ThirdPage from './component/pages/thirdpage';
import {createDrawerNavigator} from "@react-navigation/drawer"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({navigation}){
  return(
       <Stack.Navigator initialRouteName="FirstPage"
          screenOptions = {{
            headerStyle:{backgroundColor: "#5f9ea0"},
            headerTintColor:"white",
            headerTitleStyle:{fontWeight:"bold"},
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />
          }}>
          <Stack.Screen name='FirstPage' component={FirstPage}/>
        </Stack.Navigator>
  )
}

function seccondScreenStack({navigation}){
  return (
    <Stack.Navigator initialRouteName="FirstPage"
    screenOptions = {{
      headerStyle:{backgroundColor: "#5f9ea0"},
      headerTintColor:"white",
      headerTitleStyle:{fontWeight:"bold"},
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />
    }}>
    <Stack.Screen name='SecondPage' component={SecondPage}/>
    <Stack.Screen name='ThirdPage' component={ThirdPage}/>
  </Stack.Navigator>
  )
}

const NavigationDrawerStructure = (props) => {

  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }

  return(
    <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
      <MaterialCommunityIcons style={{marginLeft: 20}} name="menu" size={26} color="white" />
      </TouchableOpacity>
    </View>
  )

}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>This is Navigation Class NAJA</Text> */}
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='FirstDrawerPage' component={firstScreenStack}/> 
          <Drawer.Screen name='SecondDrawerPage' component={seccondScreenStack}/>
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
