import '../globals.css';

const JobBoard = () => {
  return (
    <main>
        <div className="recent-event">
            <div className="container">
                 <h2 className="recent-event-heading">UPCOMING EVENTS</h2>
            <p className="recent-event-sub-heading">Sign up to volunteer at an event</p>
            </div>

        </div>
        <div className="width-50">
                <div className="recent-event-list">
                    <div className="width-100">
                    <h4 className="event-title">Veterans Fall Clean-Up and Repairs</h4>
                    <p className="event-company">Saturday, November 11, 2023 <i className="fa fa-star" aria-hidden="true"></i> 8:00 AM - 1:00 PM </p>
                    </div>
                    <div className="width-33">
                    <i className="fa fa-briefcase" aria-hidden="true"></i> Rebuilding Together Map
                    </div>
                    <div className="width-100">
                    <p className="event-skill">
                    Join Rebuilding Together Aurora and Crossroads Church as we team up to serve those who have served and military families in the Fox Valley in honor of the sacrifices they have made to our country. Last year a record-breaking number of volunteers served more Veterans, military families and senior citizens than ever before and we are hoping to surpass those numbers in 2023.
                    </p>
                    <p>Register your team HERE to be paired with a family in need.</p>
                    <p>Do you know a Veteran, active-duty military, Gold Star family or service member’s widow in need of fall yard clean-up or light repairs? Email support@rtaurora.org</p>
                    </div>
                    <div className="width-100">
                    <a href="#" className="event-apply-button">Sign Up Now</a>
                </div>
            </div>
        </div>
    </main>
  );
};

export default JobBoard;