import React from "react"
import { Link } from 'react-router-dom';

import { Form, Input, Button, Checkbox } from 'antd';

import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { loginUser, logoutUser } from "../store/actions";


import { Layout, Space } from 'antd';
import { Content } from "antd/lib/layout/layout";

function Register() {

  //TODO finish this
  return (
    <Layout>
      <Content
        style={{
          padding: 42,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div>
          <h1>REGISTER</h1>
        </div>
      </Content>
    </Layout>

  );

}

export default Register

