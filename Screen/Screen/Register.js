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

const validateSchema = Yup.object().shape({
  name: Yup.string().required('กรุณาป้อนชื่อ'),
  email: Yup.string().email('รูปแบบไมู่กต้อง').required('กรอกอีกเมลใหม่'),
  password: Yup.string().min(10, 'รหัสผ่าน').required('ใส่รหัสผ่าน'),
});

const Register = () => {
  return (
    <Container>
      <Content padder>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}>
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <Form>
              <Item
                fixedLabel
                error={errors.name && touched.name ? true:false}>
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {errors.name && touched.name && <Icon name = 'close-circle'/>}
                
              </Item>
              {
                  errors.name && touched.name &&(
                    <Item>
                    <Label style={{color:'red'}}>{errors.name}
                    </Label>
                    </Item>
                  )
                }
              <Item fixedLabel 
               error={errors.email && touched.email ? true:false}>

                <Label>Email</Label>
                <Input 
                 value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  />
                  {errors.email && touched.email && <Icon name = 'close-circle'/>}
              </Item>
               {
                  errors.email && touched.email &&(
                    <Item>
                    <Label style={{color:'red'}}>{errors.email}
                    </Label>
                    </Item>
                  )
                }
              <Item fixedLabel last
              error={errors.password && touched.password ? true:false}>
                <Label>Password</Label>
                <Input 
                value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  />
                  {errors.password && touched.password && <Icon name = 'close-circle'/>}
              </Item>
                             {
                  errors.password && touched.password &&(
                    <Item>
                    <Label style={{color:'red'}}>{errors.password}
                    </Label>
                    </Item>
                  )
                }
              <Button
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
export default Register;
