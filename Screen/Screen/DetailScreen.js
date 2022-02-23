import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

const DetailScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
    });
  }, [navigation]);
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async (id) => {
    setLoading(true);
    const res = await axios.get(
      'https://api.codingthailand.com/api/course/' + id
    );
    setDetail(res.data.data); //Update Product จากค่าที่ดึงมา
    setLoading(false);
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  const _onRefresh = () => {
    getData(id);
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.ch_id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({ item,index }) => (
          <ListItem thumbnail>
            <Left>
             <Text>{index+1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>
                {item.ch_detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.ch_view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
