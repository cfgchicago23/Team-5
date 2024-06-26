"use client";
import * as React from 'react'
import '../globals.css';
import { useState } from 'react';
import SignUp from './SignUp';
import '../app.js'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
}
from 'next-share'; 

const JobPosting = () => {
    const [seen, setSeen] = useState<boolean>(false)
    function togglePop () {
        setSeen(!seen);
    };
  return (
    <main>
        <script src="../app.js" defer></script>
        <h1>Veterans' Fall Clean-Up and Repairs</h1>
        <hr></hr>
        <div className="row">
            <div className="column left2">
            <div className="row">
                <div className="column left1">
                    Share
                </div>
                <div className="column right1">
                    <FacebookShareButton url="http://www.rtaurora.org/opportunities/job1">
                        <FacebookIcon size={32} round/>
                    </FacebookShareButton>
                    <TwitterShareButton url="http://www.rtaurora.org/opportunities/job1">
                        <TwitterIcon size={32} round/>
                    </TwitterShareButton>
                    <WhatsappShareButton url="http://www.rtaurora.org/opportunities/job1">
                        <WhatsappIcon size={32} round/>
                    </WhatsappShareButton>
                </div>
            </div>
            <div className="row">
                <div className="column left1">
                    Date/Time
                </div>
                <div className="column right1">
                    Saturday, November 11th, 2023 <br></br>
                    8:00 AM - 1:00 PM
                </div>
            </div>
            <div className="row">
                <div className="column left1">
                    Location
                </div>
                <div className="column right1">
                    1 E. Benton Street, #307Aurora, IL 60505 USA
                </div>
            </div>
            <div className="row">
                <div className="column left1">
                    Description
                </div>
                <div className="column right1">
                Join Rebuilding Together Aurora and Crossroads Church as we team up to serve those who have served and military families in the Fox Valley in honor of the sacrifices they have made to our country. Last year a record-breaking number of volunteers served more Veterans, military families and senior citizens than ever before and we are hoping to surpass those numbers in 2023.
                </div>
            </div>
            <div className="row">
                <div className="column left1">
                    What You'll Be Doing
                </div>
                <div className="column right1">
                    Painting building exterior, Reinstalling floor boards, and More!
                </div>
            </div>
            <div className="row">
                <div className="column left1">
                    Volunteer List
                </div>
                <div className="column right1">
                    Jess Hyde, John Kraft, Will Stark, and 49 more
                </div>
            </div>
            <div className="row">
                <div className="column left1">
                    Tutorial Videos
                </div>
                <div className="column right1">
                    Painting Basics  <button id="myBtn">
                    <img className="video-icon" src="../../video-icon.svg"></img>
                    </button>
                    <div id="myModal" className="modal">

                    <div className="modal-content">
                        <span className="close">X</span>
                        <div><h3 className="title">Painting 101:</h3>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/CRXCB_3gLok?si=EQ_HjPy_c0byTPoa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    </div>
                    <br></br>

                    {/* Floor Installation  <button id="myBt2n">
                    <img className="video-icon" src="../../video-icon.svg"></img>
                    </button>
                    <div id="myModal2" className="modal">

                    <div className="modal-content">
                        <span className="close2">X</span>
                        <div><h3 className="title">Flooring Installation 101:</h3>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/lvqdlRzNQss?si=ubRHAlVt7j5Fymeq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    </div> */}
                </div>
            </div>
            <div className="row">
                <div className="column left1">
                </div>
                {seen ? <SignUp toggle={togglePop}/> : 
                <div className='column right1'>
                    <div className="green-button" onClick={togglePop}>
                        Sign Up For This Event!
                    </div>
                </div>}
            </div>
        </div>
        <div className="column right2">
            <div className="comment">
            What can we gain from this experience?
            </div>
            <div className="comment-user">
            - Anonymous Participant
            </div>
            <div className="comment">
            <details>
                <summary>View Replies</summary>
                <div className="comment">
                    You can change someone's life!
                </div>
                <div className="comment-user">
                    - John Gray
                </div>
                <div className="comment">
                    You can make new friends
                </div>
                <div className="comment-user">
                    - Anne Blue
                </div>
            </details>
            </div>
            <hr className="solid"></hr>
            <div className="comment">
            What time should we get there?
            </div>
            <div className="comment-user">
            - Ally Green
            </div>
            <div className="comment">
            <details>
                <summary>View Replies</summary>
                <div className="comment">
                    Just be there on time :)
                </div>
                <div className="comment-user">
                    - Team Leader
                </div>
            </details>
            </div>            
            <hr className="solid"></hr>
            <div className="comment">
            Will food be provided?
            </div>
            <div className="comment-user">
            - George Sly
            </div>
            <div className="comment">
            <details>
                <summary>View Replies</summary>
                <div className="comment">
                    Breakfast, Lunch, and a FREE Shirt!
                </div>
                <div className="comment-user">
                    - Ella King
                </div>
            </details>
            </div>            
            <hr className="solid"></hr>
            <div className="row">
                <div className="column search-left">
                    <input type="text" placeholder="Comment"/>
                </div>
                <div className="column search-right">
                    <div className="comment-button">Submit</div>
                </div>
            </div>
            </div>
        </div>	        
    </main>
  );
};

export default JobPosting;