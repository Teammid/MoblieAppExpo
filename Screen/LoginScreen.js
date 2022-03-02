import { View, Text } from 'react-native';
import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from 'native-base';
import axios from 'axios';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const LoginScreen = ({navigation}) => {
  return (
    <Container>
      <Content padder>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={async(values,{setSubmitting}) => {
            //alert(JSON.stringify(values));
            try{
              const url = 'https://api.codingthailand.com/api/login';
              
            } catch (error){
              
            }finally{
              setSubmitting(false);
            }
          }}>
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              
              <Item
                fixedLabel
                error={errors.email && touched.email ? true : false}>
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{ color: 'red' }}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                last
                error={errors.password && touched.password ? true : false}>
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{ color: 'red' }}>{errors.password}</Label>
                </Item>
              )}
              <Button
                onPress={handleSubmit}
                disabled={isSubmitting}
                block
                large
                style={{ marginTop: 30, backgroundColor: '#EE8611' }}>
                <Text
                  style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                  ลงทะเบียน
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};
export default LoginScreen;
