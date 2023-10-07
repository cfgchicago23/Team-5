import '../globals.css';

const JobBoard = () => {
  return (
    <main>
        <div className="recent-event">
            <h2 className="recent-event-heading">UPCOMING EVENTS</h2>
            <p className="recent-event-sub-heading">Sign up to volunteer at an event</p>
        </div>
          <div className="recent-event-list">
            <a href="../opportunities/job1">
              <div className='event-1'>
                <img classname = 'job-images' src = '../images/job-pic1.png' alt='happy volunteers'></img>
                <h4 className="event-title">Veterans Fall Clean-up and Repairs</h4>
                <p className="event-time">Saturday, November 25, 2023 9:00 AM - 2:00 PM </p>
                <p className="event-skill">
                Join Rebuilding Together Aurora and Crossroads Church as we team up to serve those who have served and military families in the Fox Valley.
                </p>

              </div>
            </a>
              <div className='event-1'>
                <img classname = 'job-images' src = '../images/job-pic2.png' alt='happy volunteers'></img>
                <h4 className="event-title">Community Center Floor & Painting</h4>
                <p className="event-time">Saturday, November 11, 2023 8:00 AM - 1:00 PM </p>
                <p className="event-skill">
                Welcoming all skills levels to re-paint and re-floor Aurora Community Center! 
                </p>
                <br></br>
              </div>
              <div className='event-1'>
                <img classname = 'job-images' src = '../images/job-pic3.png' alt='happy volunteers'></img>
                <h4 className="event-title">South Neighboorhood Home Repair & Cleaning</h4>
                <p className="event-time">Saturday, December 2, 2023 8:30 AM - 1:00 PM </p>
                <p className="event-skill">
                Help improve home safety features for seniors in your neighborhood to prevent falls and clear space for mobility.
                </p>
   
              </div>
        </div>
    </main>
  );
};

export default JobBoard;