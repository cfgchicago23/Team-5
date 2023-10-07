import * as React from 'react'
import '../globals.css';


// component returns the HTML of all the posts
const Posts = () => {
    let placeholder = [
        {
            username: "Jane Doe",
            img: "https://i.mydramalist.com/x4kN8X_4s.jpg?v=1",
            description: "This is a good day",
            postedDate: ""
        },
        {
            username: "John Doe",
            img: "",
            description: "This is a great day",
            postedDate: ""
        },
        {
            username: "June Doe",
            img: "",
            description: "This is a grand day",
            postedDate: ""
        }
        
    ]
  return (
    <div>
        <div>
            {placeholder.map((item) => (
                <Post postData={item}/>
            ))}
        </div>
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
            <div>
                <div className='post-img'>
                    <img src='data.img'/>
                </div>
                <p className="post-description">{data.description}</p>
            </div>
        </div>
      );
}

export default Posts;