/* eslint-disable no-unused-vars */
import {
  AttachFile,
  Call,
  Chat,
  IosShare,
  Mic,
  MoreVert,
  Send,
  Settings,
  Videocam,
} from "@mui/icons-material";
// import "./video.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import p1 from "../../assets/Ellipse 7.png";
import p2 from "../../assets/Ellipse 8.png";
import p3 from "../../assets/Ellipse 9.png";
import p4 from "../../assets/Ellipse 10.png";
import host from "../../assets/Mask group.png";
import { useState } from "react";

const VideoChat = () => {
  const [chatBox, setChatBox] = useState(false);

  const handleOpenMsg = () => {
    setChatBox(!chatBox);
  };
  return (
    <>
      <div className={`container ${chatBox ? "active" : ""}`}>
        <div className="video">
          {/* Header Start */}
          <header className={chatBox ? "activeHeader" : ""}>
            <a href="#" className="logo">
              VideoC
            </a>
            <div className="info">
              <div>
                <h4>Project Conference Meeting</h4>
                <p>UI Design</p>
              </div>
              <div className="icons">
                <Settings className="icon" />
                <MoreVert className="icon" />
              </div>
            </div>
          </header>
          {/* Header Ends */}
          <div className={`videoBx ${chatBox ? "activeVideoBx" : ""}`}>
            <div className={`img ${chatBox ? "activeImg" : ""}`}>
              <img
                src={host}
                alt=""
                className={`user ${chatBox ? "activeUser" : ""}`}
              />
              <div className={`imgBx ${chatBox ? "activeImgBx" : ""}`}>
                <img
                  src={img1}
                  alt=""
                  className={`pImg ${chatBox ? "activeImgs" : ""}`}
                />
                <img
                  src={img2}
                  alt=""
                  className={`pImg ${chatBox ? "activeImgs" : ""}`}
                />
                <img
                  src={img3}
                  alt=""
                  className={`pImg ${chatBox ? "activeImgs" : ""}`}
                />
                <img
                  src={img4}
                  alt=""
                  className={`pImg ${chatBox ? "activeImgs" : ""}`}
                />
              </div>
            </div>
          </div>
          <div className="btns">
            <Videocam className="action" />
            <Mic className="action" />
            <Call className="action red" />
            <IosShare className="action" />
            <Chat className="action" onClick={handleOpenMsg} />
          </div>
        </div>
      </div>
      {chatBox && (
        <div className="chat">
          <h4>View Message</h4>
          <div className="chatting">
            <div className="messages">
              <img src={p1} alt="" />
              <div className="userDesc">
                <h5>Anna</h5>
                <p>Please Send me Project Code</p>
              </div>
            </div>
            <div className="messages">
              <img src={p2} alt="" />
              <div className="userDesc">
                <h5>Anna</h5>
                <p>Please Send me Project Code</p>
              </div>
            </div>
            <div className="messages">
              <img src={p3} alt="" />
              <div className="userDesc">
                <h5>Anna</h5>
                <p>Please Send me Project Code</p>
              </div>
            </div>
            <div className="messages">
              <img src={p4} alt="" />
              <div className="userDesc">
                <h5>Anna</h5>
                <p>Please Send me Project Code</p>
              </div>
            </div>
          </div>
          <div className="send">
            <AttachFile className="inputIcon"  />
            <input type="text" placeholder="Write your message" />
            <Send className="inputIcon" />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoChat;
