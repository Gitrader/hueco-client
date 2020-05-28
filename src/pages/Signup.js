import React, { Component, useState, useForm } from "react";

import { Link } from "react-router-dom";
import { withAuth } from './../lib/Auth';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  
} from 'antd';
import "./Signup.css"
import { QuestionCircleOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    const {business_name,email,password,address,city,zip_code,service, phone_number, description}=values
    props.signup(business_name,email,password,address,city,zip_code,service, phone_number, description)
  };

  const { errorMessage } = props;


      
    
      return (

        <div>
          <h1 className="business-signup">Business Sign up</h1>
        
      <div className="form-ant">
        

        <Form
      {...formItemLayout}
      form={form}
      name="register"
      // onSubmit={this.handleFormSubmit}
      onFinish={onFinish}
      
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        // value={email} 
        // onChange={this.handleChange}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input className="input"/>
      </Form.Item>

      
      <Form.Item
        name="password"
        label="Password"
        // value={password} 
        // onChange={this.handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password className="input" />
      </Form.Item>


      <Form.Item
        name="business_name"
        label="Business name"
        // value={business_name} 
        // onChange={this.handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your business name',
            whitespace: true,
          },
        ]}
      >
        <Input className="input" />
      </Form.Item>

      {/* <Form.Item
        name="image_url"
        label="Picture of your business"
        value={image_url} 
        onChange={this.handleChange}
        rules={[
          {
            type: 'file',
            message: 'The image is not valid!',
          },
          // {
          //   required: true,
          //   message: 'Please  className="input" your E-mail!',
          // },
        ]}
      >
        <Input />
      </Form.Item> */}


      <Form.Item
        name="address"
        label="Business address"
        // value={address} 
        // onChange={this.handleChange}
        rules={[
          {
            
            required: true,
            message: 'Please select your business address!',
          },
        ]}
      >
        <Input className="input"/>
      </Form.Item>

      <Form.Item
        name="zip_code"
        label="Zip Code"
        // value={zip_code} 
        // onChange={this.handleChange}
        rules={[
          {
            
            required: true,
            message: 'Please select your zip code!',
          },
        ]}
      >
        <Input className="input"/>
      </Form.Item>

      <Form.Item
        name="city"
        label="City"
        // value={city} 
        // onChange={this.handleChange}
        rules={[
          {
            
            required: true,
            message: 'Please select your city!',
          },
        ]}
      >
        <Input className="input"/>
      </Form.Item>

      <Form.Item
        name="phone_number"
        label="Phone Number"
        // value={phone_number} 
        // onChange={this.handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          // addonBefore={prefixSelector}
          // style={{
          //   width: '100%',
          // }}
          className="input"/>
      </Form.Item>

      <Form.Item
        name="service"
        label="What kind of service are you offering?"
        // value={service} 
        // onChange={this.handleChange}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className="input"/>
      </Form.Item>


      <Form.Item 
      name="description" 
      label="Description of your business"
      // value={description} 
      //   onChange={this.handleChange}
        >
        <Input.TextArea 
         className="input"/>
      </Form.Item>

      

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className="singup-btn">
          Register
        </Button>
      </Form.Item>
    </Form>
{/* 
<div className="registered">
        <p >Already have account?</p>
        <Link to={"/login"} className="link"> Login here</Link>
</div> */}
      </div>
      </div>
      );
    }
  


export default withAuth(RegistrationForm);





// ReactDOM.render(<RegistrationForm />, document.getElementById('container'));