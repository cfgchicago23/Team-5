import '../globals.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <img className="h-70 lg:h-40" src="http://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1581533791977-LXZWE6Q3JU2GPGEGK0QQ/RTA+logo+2.JPG?format=1500w"/>
        <a href="#feed">Feed</a>
        <a href="#resources">Resources</a>
        <a className="active" href="#opportunities">Opportunities</a>
    </div>
  );
};

export default Navbar;