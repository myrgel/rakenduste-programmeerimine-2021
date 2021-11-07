import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";

import { Layout, Menu, Breadcrumb } from 'antd';
import { Content } from "antd/lib/layout/layout";

function Posts() {
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);



  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  useEffect(() => {
    dispatch(updatePosts([
      {
        id: 1,
        title: "Test-prefetched-array-1",
        poster: "defualtTEST",
        postTime: '0'
      },
        //{
        //  id: 2,
        //  title: "Test-prefetched-array-2"
        //},
        //{
        //  id: 3,
        //  title: "Test-prefetched-array-3"
        //},
        //{
        //  id: 4,
        //  title: "Test-prefetched-array-4"
        //},
    ]))
  }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewPost = () => {
    const newPost = {
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

  return (
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
        <div style={{ textAlign: "center" }}>
          <h1>Posts</h1>
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
            <button type="submit">Submit</button>
          </form>

          {state.posts.data.map((e) => (
            <li key={e.id}>
              {e.id} {e.title}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(removePost(e.id))}
              >
                &#128540;
              </span>
            </li>
          ))}
        </div>
      </Content>
    </Layout>
  );
}

export default Posts;
