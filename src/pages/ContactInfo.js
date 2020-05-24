import React, { Component, useState, useForm } from "react";

import { Link } from "react-router-dom";
import { withAuth } from './../lib/Auth';
import bookingService from './../lib/booking-service'
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Steps
  
} from 'antd';
import "./ContactInfo.css"



const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const ContactInfo = (props) => {
    const onFinish = values => {
      console.log('props', props);
      const {first_name, last_name,email}=values
      props.booking(first_name, last_name,email)
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

  const { Step } = Steps;
    
      return (

        <div className="contact">
        <div className="step">
        <Steps current={0} >
    <Step title="Contact Information" description="In progress" />
    <Step title="Secure your hueco" subTitle="" description="Next Step" />
    <Step title="Waiting" description="Hueco confirmation" />
  </Steps>
  </div>
  
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

<Form.Item
        label="First name"
        name="first_name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
          },
        ]}
      >
        <Input className="input"/>
      </Form.Item>

      <Form.Item
        label="Last name"
        name="last_name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}
      >
        <Input className="input" />
      </Form.Item>


      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
              type:"email",
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input className="input"/>
      </Form.Item>



      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
      );
    }
  


export default ContactInfo;





