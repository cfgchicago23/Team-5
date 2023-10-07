import * as React from 'react'
import '../globals.css';


interface PopupProps {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<PopupProps> = ({ toggle }) => {
    return (
        <div className="signup">
            <div className="popup-inner">
                <div>
                    <p>Sign Up</p>
                    <hr className="solid"></hr>
                </div>
                <form className='post-form'>
                    <label>
                        Name:
                        <div className="form-input">
                            <textarea placeholder="First Last"></textarea>
                        </div>
                        Phone Number:
                        <div className="form-input">
                            <textarea placeholder="+1 (XXX) XXX-XXXX"></textarea>
                        </div>
                    </label>
                    <div className='popup-button'>
                        {/* <button onClick={toggle}>Close</button> */}
                        <button className="close-button" type="submit">Close</button>
                        <button className="submit-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SignUp;