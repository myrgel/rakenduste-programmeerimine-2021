import React from "react"
import { Link } from 'react-router-dom';

import { Form, Input, Button, Checkbox } from 'antd';

import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { loginUser, logoutUser} from "../store/actions";


import { Layout, Space } from 'antd';
import { Content } from "antd/lib/layout/layout";
//TODO teha signup


function Login() {

  const [state, dispatch] = useContext(Context);


  const onFinish = (values) => {
    //TODO input auth
    //TODO db
    //TODO FIX SECURITY
    //TODO registreerumine
    console.log('Success:', values);

    const userInfo = {
      token: null,
      user: values.username
    };

    //try {
    //  fetch('http://localhost:8081/api/auth/login', {
    //    method: 'POST',
    //    body: JSON.stringify(userInfo)
    //  })
    //} catch (error) {
    //  //TODO REMOVE THIS 
    //  console.error(error);
    //  // expected output: ReferenceError: nonExistentFunction is not defined
    //  // Note - error messages will vary depending on browser
    //}

    dispatch(loginUser(userInfo));

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Layout>
      <Content
        style={{
          padding: 42,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Space size={18}>
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
              <Button>
                <Link to="/register">
                  Register
                </Link>
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  )
}

export default Login