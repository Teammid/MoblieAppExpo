import { Button, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import React from 'react';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeStack = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="register" iconName="ios-document-attach" onPress={() => alert('Register ทำไมบ้าบอที่สุด')} />
      </HeaderButtons>
      ),
      headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="search" iconName="ios-search" onPress={() => alert('Search ทำไมบ้าบอที่สุด')} />
      </HeaderButtons>
      )
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Ionicons name="ios-home-sharp" size={24} color="black" />
        <Button
        title='HOME'
        onPress={() => navigation.navigate('DetailStack')}
        />
    </View>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
    container : { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
