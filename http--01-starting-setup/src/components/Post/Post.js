import React from 'react';
import {withRouter} from "react-router-dom"


import './Post.css';

const post = (props) =>{
    console.log(props.id)
    return(
        <article className="Post"
        onClick = {
            () => props.clicked(props.id)
            }
        >
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">
                Author
            </div>
        </div>
    </article>
    )
} 

export default post
//export default withRouter(post);

//for making available the routing props like location and match we can wrap our component with withRouter hook.