import React,{useState,useEffect} from 'react';
import {StyleSheet,  View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Badge } from 'native-base';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => navigation.navigate('Register')}
          />
        </HeaderButtons>
      ),  
    });
  }, [navigation]);
  
  const [product,setProduct] = useState([]);
  useEffect(()=>{
      const getData = async ()=>{
          const res = await axios.get('https://api.codingthailand.com/api/course');
          setProduct(res.data.data); //Update Product จากค่าที่ดึงมา
        };
        getData();
      }, []);
  return (
    <View >
    <FlatList
        data={product}
        keyExtractor={(item,index)=>item.id.toString()}
        renderItem={({item})=>(
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: item.picture }} />
              </Left>
              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>{item.detail}</Text>
              </Body>
              <Right>
                <Badge danger>
                    <Text>
                        {item.view}
                    </Text>
                </Badge>
              </Right>
            </ListItem>
        )}
    />
    </View>
  );
};


export default ProductScreen;