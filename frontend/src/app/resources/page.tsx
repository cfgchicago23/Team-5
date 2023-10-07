"use client";
import Navbar from '../components/Navbar'
import { useState } from 'react';
import '../globals.css';


const Resources = () => {

  const [isShowingCurrent, setIsShowingCurrent] = useState(true);
  function showPastEvents() {
    setIsShowingCurrent(false);
  }

  function showCurrentEvents() {
    setIsShowingCurrent(true);
  }
  
return (
   <main>
     <div className = "bodyResource">
      <Navbar page="resources"/>
      <div className= "resourcesContainer"> 
         <h2 className= "heading-title">Rebuilding Aurora 101: What to Know On Your First Day</h2>
         <div className="imageContainer">
           <img src="../resourceImg/743 N View 2011 volunteer photo group.jpg" alt="Description of Image 1" className="resourceImage"/>
           <img src="../resourceImg/20170603_100630.jpg" alt="Description of Image 2" className="resourceImage"/>
           <img src="../resourceImg/20180703_151710.jpg" alt="Description of Image 3" className="resourceImage"/>
         </div>
        <div><p className="imageContainer">Thank you for taking a step toward rebuilding together, here are tips to make your experience as smooth as possible!</p></div>
       </div>

      <div className='resources-button'>
        <button className="current-events" onClick={showCurrentEvents}> Hands on Skills</button>
        <button className="past-events" onClick={showPastEvents}> Interpersonal Skills</button>
      </div>
      

      {isShowingCurrent ?
       (<div className="video-container">
          <div className="square"><h3 className="title">Painting 101:</h3><p className="textInsideSquare">For those, who will be taking part of the paint part of the rebuilding process:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CRXCB_3gLok?si=EQ_HjPy_c0byTPoa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="square"><h3 className="title">Woodworking 101:</h3><p className="textInsideSquare">For those, who will be taking part of working with wood and tools for the rebuilding process:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3cME3vK1aaQ?si=b6vwzcbA6GvKobum" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="square"><h3 className="title">Windows 101:</h3><p className="textInsideSquare">For those, who will be taking part of working with window installation for the rebuilding process:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1qAdrxsL0k8?si=1m8d2DY6QruoVJgL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="square"><h3 className="title">Drywall and Plaster 101:</h3><p className="textInsideSquare">For those, who will be taking part of working with the drywall and plasterwork for the rebuilding process:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/McCZLfZipTg?si=HTi-EcSUD-f4kSvH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="square"><h3 className="title">Flooring Installation 101:</h3><p className="textInsideSquare">For those, who will be taking part of working with the flooring and installation process:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lvqdlRzNQss?si=ubRHAlVt7j5Fymeq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="square"><h3 className="title">HVAC 101:</h3><p className="textInsideSquare">For those, who will be taking part of the HVAC process here are the basics:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vJjaRTPiksA?si=egStAJTVLDWpbw-O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="square"><h3 className="title">Plumbing 101:</h3><p className="textInsideSquare">For those, who will be taking part of the plumbing process here are the basics:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SCmtGb5SFfU?si=Xo-yeLoIBC62fO9J" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="square"><h3 className="title">Electricity 101:</h3><p className="textInsideSquare">For those, who will be taking part of the electricity process here are the basics:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zdrUX6_LGmE?si=mDnytQA1XgIhujtO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="square"><h3 className="title">Landscaping 101:</h3><p className="textInsideSquare">For those, who will be taking part of the landscaping process here are the basics:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/e-wO-LqEQb4?si=xeDmU3kERv6wkU8G" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>) : 
        (<div className = 'video-containerTwo'>
           <div className="square"><h3 className="title">Empathy 101:</h3><p className="textInsideSquare">Little things that you can do to provide empathy to our communities:</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UzPMMSKfKZQ?si=Z8QyvmE3KUqc0Rta"title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="square"><h3 className="title">Cultural Sensitivity 101:</h3><p className="textInsideSquare">How to be culturally sensitive when entering a new home:</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mklKePi10AI?si=Ognak8Zi8XUX1jOv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div> 
        </div>)}
      </div>
   </main>
   )
}


export default Resources;