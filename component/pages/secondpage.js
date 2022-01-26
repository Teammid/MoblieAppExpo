import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { drawerStyle } from '../styles/styles';

const SecondPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1,padding:15}}>
        <View style={drawerStyle.container}>
            <Text style= {drawerStyle.textTopStyle}>
                This is the Second Page
            </Text>
            <Button title='Go to First Page'
             onPress={() => navigation.navigate("FirstPage")}/>
            <Button title='Go to Third Page'
            onPress={() => navigation.navigate("ThirdPage")}/>
        </View>
        <Text style={drawerStyle.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
    </View>
</SafeAreaView>
  );
};

export default SecondPage;
