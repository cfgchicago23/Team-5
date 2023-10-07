"use client";
import * as React from 'react'
import '../globals.css';
import { useState } from 'react';
import Popup from './Popup';


// component returns the HTML of all the posts
const Posts = () => {
    let placeholder = [
        {
            username: "Jane Doe",
            img: "../images/RTAMembers.jpg", 
            description: "These columns are beautiful!",
            postedDate: ""
        },
        {
            username: "John Doe",
            img: "../images/John.png",
            description: "Amazing day of Rebuilding",
            postedDate: ""
        },
        {
            username: "June Doe",
            img: "../images/cleaning.gif",
            description: "Today was so fun!",
            postedDate: ""
        }
        
    ]
    const [seen, setSeen] = useState<boolean>(false)
    function togglePop () {
        setSeen(!seen);
    };

  return (
    <div>
        {seen ? <Popup toggle={togglePop}/> : 
        <div>
            <div className='post-form-container'>
                <div onClick={togglePop}>
                    <p>Share Your Volunteering Spirit!</p>
                    <p className='plus'></p>
                </div>
            </div>
            <div className='post-container'>
                {placeholder.map((item) => (
                    <Post postData={item}/>
                ))}
            </div>
        </div>}
    </div>
    
  );
};

interface PostProps {
    postData: Props;
}

interface Props {
    username: string;
    img: string;
    description: string;
    postedDate: string;
}

// component returns the HTML of one post, given that post's information as props
const Post: React.FC<PostProps> = ({ postData }) => {
    let data = postData
    return (
        <div className="post">
            <div className='post-header'>
                <p>{data.username}</p>
            </div>
            <div className='post-img'>
                <a><img src={data.img}></img></a>
            </div>
            <div className="post-description">
                <p>{data.description}</p>
            </div>
        </div>
      );
}

export default Posts;