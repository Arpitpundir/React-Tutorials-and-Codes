import React, { Component } from 'react';
import './FullPost.css';
import axios from './../../axios';

class FullPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullPost:null
        }
    }
    //componentDidUpdate(prevProps, prevState){
        //whenever using update lifecycle be attentive that you not start the infinite loop
        //if(prevProps.postId != this.props.postId){
    componentDidMount(){
        this.loadData()
    }

    componentDidUpdate(){
        this.loadData()
    }

    loadData(){
        if(this.props.match.params.id){
            if(!this.state.fullPost || (this.state.fullPost != this.props.match.params.id)){
                axios.get(
                    "posts/" +
                    this.props.match.params.id).
                then((res) => {
                    this.setState({
                        fullPost: res.data
                    })
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if(this.state.fullPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.fullPost.title}</h1>
                    <p>{this.state.fullPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;