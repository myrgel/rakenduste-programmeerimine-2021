import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";

import { Table, Tag, Space } from 'antd';

import { DeleteFilled } from '@ant-design/icons';

import { Form, Input, Button, Checkbox } from 'antd';

import { Layout, Menu, Breadcrumb } from 'antd';
import { Content } from "antd/lib/layout/layout";



function PostsTable() {
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  useEffect(() => {

    fetch('http://localhost:8081/api/post/').then(res => {
      return res.json();
    }).then(data => {
      console.log(data)
      //TODO fix backend tables - item  to post
      //dispatch(updatePosts(data))
      //TODO see t6sta ymber actions.js ?
      dispatch(updatePosts(data.map((e) => (
        {
          key: e._id,
          id: e._id,
          title: e.name,
          poster: e.color,
          postTime: e.createdAt
        }
      ))));
    })

  }, []);
    

    // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitle("");

        addNewPost()

        if (inputRef.current) inputRef.current.focus();
    };


    const addNewPost = () => {
        const newPost = {
            //TODO fix this
            key: Date.now(),
            id: Date.now(),
            title,
            poster: state.auth.user,
            postTime: Date.now()
        };

        // Salvestame andmebaasi ja kui on edukas, 
        // siis teeme dispatchi ja uuendame state lokaalselt

        dispatch(addPost(newPost));
    };

    console.log({ inputRef });

    console.log(state.posts.data);

    //TODO lisada textBody column

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Poster',
            dataIndex: 'poster',
            key: 'poster'
        },
        {
            title: 'PostTime',
            dataIndex: 'postTime',
            key: 'postTime'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <DeleteFilled
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(removePost(record.id))}
                    />
                </Space>
            ),
        },
    ]




    ////TODO TESTING FIX THIS
    console.log(state.auth.user);
    console.log(state.posts.data)


    return (
      //TODO change to antd button
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Layout>
              <div key="postTableKey" style={{ textAlign: "center" }}>
                <h1>Posts</h1>
                <form onSubmit={handleSubmit}>
                  
                  <input
                      ref={inputRef}
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      autoFocus
                  />                    
                  <br/>
                  <br/>
                  <Button type="primary" htmlType="submit">Submit</Button>
                </form>
                <br/>
                <Table pagination={{ pageSize: 25 }} columns={columns} dataSource={state.posts.data} />
              </div>
          </Layout>
        </Content>
      </Layout>
    );
}

export default PostsTable;
