import * as React from 'react'
import '../globals.css';


interface PopupProps {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ toggle }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <div>
                    <p>Create Post</p>
                    <hr className="solid"></hr>
                </div>
                <form className='post-form'>
                    <label>
                        Description:
                        <div className="form-input">
                            <textarea placeholder="What's on your mind?"></textarea>
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

export default Popup;