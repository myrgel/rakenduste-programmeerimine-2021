import React from "react"
import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
//import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function HeaderComp() {
  return (
    //TODO defaultSelected to url
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <span>HOME</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/posts">
              <span>POSTS</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/postsTable">
              <span>TABLE</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/login">
              <span>Log In</span>
            </Link>
          </Menu.Item>
      </Menu>
    </Header>
  </Layout>
  )
}



export default HeaderComp