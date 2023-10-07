import * as React from 'react'
import '../globals.css';
import { useEffect, useState } from 'react';
import Popup from './Popup';
import axios from 'axios';


// component returns the HTML of all the posts
const Posts = () => {
    const [seen, setSeen] = useState<boolean>(false)
    function togglePop () {
        setSeen(!seen);
    };

    const [postProps, setPostProps] = useState<Props[]>([])

    useEffect(() => {
        try {
            axios({
                method: "get",
                url: "http://127.0.0.1:8080/feed",
            }).then(response => {
                setPostProps(response.data);
            });
        } catch(e) {
            console.error('Error uploading file:', e);
        }
    }, [])
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
                {postProps.map((item: Props) => {
                    return <Post postData={item}/>
                })}
            </div>
        </div>}
    </div>
    
  );
};

interface PostProps {
    postData: Props;
}

interface Props {
    author: AuthorProp;
    imgURL: string;
    description: string;
    postedDate: string;
}

interface AuthorProp {
    name: string
}

// component returns the HTML of one post, given that post's information as props
const Post: React.FC<PostProps> = ({ postData }) => {
    let data = postData
    return (
        <div className="post">
            <div className='post-header'>
                <p>{data.author.name}</p>
            </div>
            <div className='post-img'>
                <a><img src={data.imgURL}></img></a>
            </div>
            <div className="post-description">
                <p>{data.description}</p>
            </div>
        </div>
      );
}

export default Posts;