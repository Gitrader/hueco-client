import React, { Component, useState, useForm } from "react";

import { Link } from "react-router-dom";
import { withAuth } from './../lib/Auth';
import bookingService from './../lib/booking-service'
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Steps,
  notification,
  
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

  // let randomNumber = (max, min) => { 

  //   return Math.floor(Math.random() * (max - min + 1) + 10);
  // }

  const openNotification =( placement) => {
    let randomNumber=Math.floor(Math.random() * (100 - 10+ 1) + 10)
    notification.info({
      message: `${randomNumber} people are checking this Hueco near Barcelona.`,
      description:
        `Be the one to book it now!`, placement,
    });
  };


const ContactInfo = (props) => {
    const onFinish = values => {
      console.log('propsbooooking', props);
      const {first_name, last_name,email}=values;
const{businessId, timeslotId}=props.match.params;
      bookingService
      .bookingUserContactInfo({ 
        first_name,
        last_name,
        email,
        businessId,
        timeslotId
      }) 
     .then( (response) =>{console.log("response", response)
     let newBookingId= response.newBooking._id
      props.history.push(`/booking/${newBookingId}/payment-information`)})
     .catch( (err) => console.log(err));
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
        onClick={() => openNotification('bottomLeft')}
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





// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Button, notification, Divider, Space } from 'antd';
// import {
//   RadiusUpleftOutlined,
//   RadiusUprightOutlined,
//   RadiusBottomleftOutlined,
//   RadiusBottomrightOutlined,
// } from '@ant-design/icons';

// const openNotification = placement => {
//   notification.info({
//     message: `Notification ${placement}`,
//     description:
//       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//     placement,
//   });
// };

// ReactDOM.render(
//   <div>
//     <Space>
//       <Button type="primary" onClick={() => openNotification('topLeft')}>
//         <RadiusUpleftOutlined />
//         topLeft
//       </Button>
//       <Button type="primary" onClick={() => openNotification('topRight')}>
//         <RadiusUprightOutlined />
//         topRight
//       </Button>
//     </Space>
//     <Divider />
//     <Space>
//       <Button type="primary" onClick={() => openNotification('bottomLeft')}>
//         <RadiusBottomleftOutlined />
//         bottomLeft
//       </Button>
//       <Button type="primary" onClick={() => openNotification('bottomRight')}>
//         <RadiusBottomrightOutlined />
//         bottomRight
//       </Button>
//     </Space>
//   </div>,
//   document.getElementById('container'),
// );