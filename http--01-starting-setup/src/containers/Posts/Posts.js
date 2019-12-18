import React, {Component} from "react"
import axios from "axios"
import Post from "./../../components/Post/Post"
import styles from "./Posts.module.css"
import {Link, Route} from "react-router-dom"
import FullPost from "./../FullPost/FullPost"

class Posts extends Component{
  constructor(props){
    super(props)
    this.state = {
      posts:[]
    }
  }
  componentDidMount() {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        this.setState({posts: res.data.slice(0,4)});
    })
    .catch((error) => {
        console.log(error);
    })
  }

  setFullPostHandler = (id) => {
    this.setState({fullPost: id});
  }
  render() {
    //console.log(styles.Posts)
    const posts = this.state.posts.map(post =>{
        //console.log(post)
        return (<Link to = {"/posts/"+post.id} key={post.id}><Post
        title={post.title}
        key={post.id}
        id={post.id}
        clicked={() => this.setFullPostHandler(post.id)}/></Link>);
    })
    return(
      <section className={styles.Posts}>
        {posts}
        <Route exact path = "/posts/:id" component = {FullPost}></Route>
      </section>
    )
  }
}

export default Posts