import { StyleSheet, Text, View, Button} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react';

const DetailStack = ({navigation}) => {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons name="account-details" size={24} color="black" />
        <Button
        title='Detailed'
        onPress={() => navigation.navigate('HomeStack')}
        />
    </View>
  );
};

export default DetailStack;

const styles = StyleSheet.create({
    container : { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
