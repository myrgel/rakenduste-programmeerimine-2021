import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./pages/Posts";

import PostsTable from "./pages/PostsTable";
import Login from "./components/Login";

import HeaderComp from "./components/HeaderComp";

import LayoutContainer from "./layout/LayoutContainer.js";
import Register from "./components/Register.js";


function App() {
  return (

    <BrowserRouter>
      <Route path="/" component={HeaderComp} />
      <Switch>
        {/*   TODO fix sideNav*/}
        <Route exact path="/" component={LayoutContainer} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/postsTable" component={PostsTable} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
