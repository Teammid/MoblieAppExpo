import React from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import { WebView } from 'react-native-webview'

import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

const MenuScreen = ({navigation}) => {

  return(
    <ScrollView style={{flex:1}}>
      <View>
        <Text style={{
          color:'blue',
          fontSize:20,
          fontWeight:'bold',
          padding:20,
        }}> 
          เมนูหลัก
        </Text>
        {/*code native base*/}
        <Content>

          <ListItem icon
            style = {{marginBottom:10, marginTop:10}}
            onPress={() => navigation.navigate('Home')}
          >
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon
            style = {{marginBottom:10, marginTop:10}}
            onPress={() => navigation.navigate('Product')}
          >
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="cart" />
              </Button>
            </Left>
            <Body>
              <Text>สินค้า</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          
        </Content>
    </View>
    </ScrollView>
    
  )
}

export default MenuScreen