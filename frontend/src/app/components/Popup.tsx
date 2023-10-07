import * as React from 'react'
import { useState } from 'react';
import '../globals.css';
import axios from 'axios';

interface PopupProps {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ toggle }) => {
    const [filebase64,setFileBase64] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    function convertFile(files: FileList|null) {
      console.log(files)
      if (files) {
        const fileRef = files[0] || ""
        const fileType: string= fileRef.type || ""
        const reader = new FileReader()
        reader.readAsBinaryString(fileRef)
        reader.onload=(ev: any) => {
          setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
        }
      }
    }

    const handleSubmit = async () => {
        const postDetails = {
            img: filebase64,
            description: description
        }

        try {
            const response = await axios({
                method: "post",
                url: "http://127.0.0.1:8080/feed",
                data: postDetails,
                headers: { "Content-Type": "application/json" }
            })
            console.log('Photo uploaded successfully:', response.data);
        } catch(e) {
            console.error('Error uploading file:', e);
        }
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <div>
                    <p>Create Post</p>
                    <hr className="solid"></hr>
                </div>
                <form className='post-form'>
                    <label>
                        Upload Image:
                        <div className="form-input">
                            <input type="file" onChange={(e)=> convertFile(e.target.files)} />
                            <hr />
                            { filebase64 &&
                                <>

                                {(filebase64.indexOf("image/") > -1) && 
                                <img src={filebase64} width={300} />
                                }

                                {(filebase64.indexOf("video/") > -1)  && 
                                <video controls >
                                <source src={filebase64} />
                                </video>
                                }
                    

                                {(filebase64.indexOf("audio/") > -1)  && 
                                <audio controls >
                                    <source src={filebase64} />
                                </audio>
                                }

                                {(filebase64.indexOf("application/pdf") > -1)  && 
                                <embed src={filebase64} width="800px" height="2100px" />
                                }

                                <hr />
                                </>
                            }
                        </div>
                    </label>
                    <label>
                        Description:
                        <div className="form-input">
                            <textarea placeholder="What's on your mind?" onChange={(event) => {if (event.target.value !== "") {setDescription(event.target.value)}}}></textarea>
                        </div>
                    </label>
                    <div className='popup-button'>
                        {/* <button onClick={toggle}>Close</button> */}
                        <button className="close-button" type="submit">Close</button>
                        <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>                    
                </form>
            </div>
        </div>
    )
};

export default Popup;