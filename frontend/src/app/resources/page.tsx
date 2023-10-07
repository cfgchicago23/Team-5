import Navbar from '../components/Navbar'
import '../globals.css';


const Resources = () => {
return (
  <main>
    <Navbar page="resources"/>
    <div className="resourcesContainer"> 
        <h1 className="title">Rebuilding Aurora 101: What to Know On Your First Day</h1>
        <div className="imageContainer">
          <img src="../resourceImg/743 N View 2011 volunteer photo group.jpg" alt="Description of Image 1" className="resourceImage" />
          <img src="../resourceImg/20170603_100630.jpg" alt="Description of Image 2" className="resourceImage"/>
          <img src="../resourceImg/20180703_151710.jpg" alt="Description of Image 3" className="resourceImage"/>
      </div> 
      <div><p className="imageContainer">Thank you for taking a step toward rebuilding together, here are tips to make your experience as smooth as possible!</p></div>
      </div>
      <div className="leftSquare"><h3 className="title">Painting 101:</h3><p className="textInsideSquare">For those, who will be taking part of the paint part of the rebuilding process:</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CRXCB_3gLok?si=EQ_HjPy_c0byTPoa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="rightSquare"><h3 className="title">Woodworking 101:</h3><p className="textInsideSquare">For those, who will be taking part of working with wood and tools for the rebuilding process:</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3cME3vK1aaQ?si=b6vwzcbA6GvKobum" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
  </main>
);
}


export default Resources;