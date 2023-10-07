"use client";
import * as React from 'react'
import '../globals.css';
import { useState } from 'react';
import SignUp from './SignUp';

const JobPosting = () => {
    const [seen, setSeen] = useState<boolean>(false)
    function togglePop () {
        setSeen(!seen);
    };
  return (
    <main>
        <h1>Veterans' Fall Clean-Up and Repairs</h1>
        <hr></hr>
        <div className="row">
            <div className="column left2">
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
                    <a href="https://www.youtube.com/embed/CRXCB_3gLok?si=EQ_HjPy_c0byTPoa">
                        Painting Basics <img className="video-icon" src="../../video-icon.svg"></img>
                    </a>
                    <br></br>
                    <a href="https://www.youtube.com/embed/CRXCB_3gLok?si=EQ_HjPy_c0byTPoa">
                        Safety Overview <img className="video-icon" src="../../video-icon.svg"></img>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="column left1">
                </div>
                {seen ? <SignUp toggle={togglePop}/> : 
                <div className='column right1'>
                    <div onClick={togglePop}>
                        <button>Sign Up For This Event!</button>
                    </div>
                </div>}
            </div>
        </div>
        <div className="column right2">Comment Thread</div>
        </div>
    </main>
  );
};

export default JobPosting;