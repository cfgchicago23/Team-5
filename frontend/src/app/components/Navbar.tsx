import '../globals.css';
import { UserButton , SignInButton,SignUpButton,SignOutButton} from "@clerk/nextjs";


interface PageName {
  page: string
}

function Navbar({ page }: PageName) {
  if (page=="feed") {
    return (
      <div className="navbar">
          <img src="http://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1581533791977-LXZWE6Q3JU2GPGEGK0QQ/RTA+logo+2.JPG?format=1500w"/>
          <a className="active" href="feed">Feed</a>
          <a href="resources">Resources</a>
          <a href="opportunities">Opportunities</a>
          <a href="translation">Translator</a>
      </div>
    );
  }
  else if (page=="resources") {
    return (
      <div className="navbar">
          <img src="http://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1581533791977-LXZWE6Q3JU2GPGEGK0QQ/RTA+logo+2.JPG?format=1500w"/>
          <a href="feed">Feed</a>
          <a className="active" href="resources">Resources</a>
          <a href="opportunities">Opportunities</a>
          <a href="translation">Translator</a>

      </div>
    );
  }
  else if (page=="translation") {
    return (
      <div className="navbar">
          <img src="http://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1581533791977-LXZWE6Q3JU2GPGEGK0QQ/RTA+logo+2.JPG?format=1500w"/>
          <a href="feed">Feed</a>
          <a href="opportunities">Opportunities</a>
          <a className="active" href="translation">Translator</a>
          
      </div>
    );
  }
  else {
    return (
      <div className="navbar">
          <img src="http://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1581533791977-LXZWE6Q3JU2GPGEGK0QQ/RTA+logo+2.JPG?format=1500w"/>
          <a href="feed">Feed</a>
          <a href="resources">Resources</a>
          <a className="active" href="opportunities">Opportunities</a>
          <a href="translation">Translator</a>

        <UserButton/>
          <div>

<SignInButton/>
<SignUpButton/>
<SignOutButton/>
</div> 
      </div>
    );
  }
};

export default Navbar;