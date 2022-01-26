import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import {drawerStyle} from "../styles/styles"

const FirstPage = ({navigation}) => {
  return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1,padding:15}}>
              <View style={drawerStyle.container}>
                  <Text style= {drawerStyle.textTopStyle}>
                      This is the First Page
                  </Text>
                  <Button title='Go to Second Page'
                   onPress={() => navigation.navigate("SecondPage")}/>
                  <Button title='Go to Third Page'
                  onPress={() => navigation.navigate("ThirdPage")}/>
              </View>
              <Text style={drawerStyle.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
          </View>
      </SafeAreaView>
  );
};

export default FirstPage;
