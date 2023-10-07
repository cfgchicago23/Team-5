import * as React from 'react'
import '../globals.css';
import imageToAdd from '../../public/images/RTAMembers.jpg';


// component returns the HTML of all the posts
const Posts = () => {
    let placeholder = [
        {
            username: "Jane Doe",
            img: "../images/RTAMembers.jpg", 
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
    <div className='post-container'>
        {placeholder.map((item) => (
            <Post postData={item}/>
        ))}
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
                <img src={data.img}/>
            </div>
            <div className="post-description">
                <p>{data.description}</p>
            </div>
        </div>
      );
}

export default Posts;