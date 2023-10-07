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
      </div>
  </main>
);
}


export default Resources;