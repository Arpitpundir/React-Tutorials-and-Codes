import React, {Component} from 'react'
import Post from '../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
//import NewPost from '../NewPost/NewPost'
import axios from "axios"
import styles from "./Blog.module.css"
import Posts from "./../Posts/Posts"
import {Route, Link, NavLink, Switch, Redirect} from "react-router-dom"
import asyncComponent from "./../../hocs/asyncComponent"

const AsyncNewPost = asyncComponent(() => {
    return import("../NewPost/NewPost")
});
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullPost: null,
            auth: true
        };
    };

    render() {
        //console.log(styles.Posts)
        return (
            <div className = {styles.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeClassName = {styles.active} exact to = "/posts">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to = {{pathname: "/posts/new-post",
                            hash: "#submit",
                            search: "?quick-submit=true"}}
                            activeClassName = {styles.active}> New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path = "/posts/" exact render = {()=> <h3>Home</h3>}></Route>*/}
                <Switch>
                    {
                        this.state.auth ? <Route exact path = "/posts/new-post" component = {AsyncNewPost}></Route>:
                        null
                    }
                    <Route exact path = "/posts" component = {Posts}></Route>
                    <Route render = {()=> "Not Found"}></Route>
                    { /*<Redirect from = "/" to = "/posts"></Redirect>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;

//link tag do not let reload your site as in the case of a tag, it uses to prop for defining the location to which they 
//should navigate to this can either be a string or a location object

//when we are routing and render a component then react passes location and match object as props to the rendered
//component which we can then use.