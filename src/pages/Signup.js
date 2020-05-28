import React from "react";
import { withAuth } from "./../lib/Auth";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import "./Signup.css";

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

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const {
      business_name,
      email,
      password,
      address,
      city,
      zip_code,
      service,
      phone_number,
      description,
      discount,
      initial_price,
      discounted_price
    } = values;
    props.signup(
      business_name,
      email,
      password,
      address,
      city,
      zip_code,
      service,
      phone_number,
      description,
      discount,
      initial_price,
      discounted_price
    );
  };

  return (
    <div>
      <h1 className="business-signup">Business Sign up</h1>

      <div className="form-ant">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password className="input" />
          </Form.Item>

          <Form.Item
            name="business_name"
            label="Business name"
            rules={[
              {
                required: true,
                message: "Please input your business name",
                whitespace: true,
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            name="address"
            label="Business address"
            rules={[
              {
                required: true,
                message: "Please select your business address!",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            name="zip_code"
            label="Zip Code"
            rules={[
              {
                required: true,
                message: "Please select your zip code!",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
                message: "Please select your city!",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            name="phone_number"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            name="service"
            label="What kind of service are you offering?"
            rules={[
              {
                required: true,
                message: "Please input your service!",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>



          <Form.Item
            name="discount"
            label="How much discount do you want to offer?"
            rules={[
              {
                required: true,
                message: "Please input your discount!",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>


          <Form.Item
            name="initial_price"
            label="What is the initial price of your service?"
            rules={[
              {
                required: true,
                message: "Please input your initial price!",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            name="discounted_price"
            label="What is the discouted price of your service?"
            rules={[
              {
                required: true,
                message: "Please input your discounted price!",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>



          <Form.Item
            name="description"
            label="Description of your business"
            rules={[
              {
                required: true,
                message: "Please describe your service",
              },
            ]}
          >
            <Input.TextArea className="input" />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="singup-btn">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default withAuth(RegistrationForm);
