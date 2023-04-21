import React from "react";
import Button from "react-bootstrap/Button";
import Globe from "./Icon/globe.svg";
import Clevron from "./Icon/chevron-down.svg";
import Target from "./Icon/target.svg";
// import Orignalfrom "./Icon/Orig Pic.png"
import couple from "./Icon/Couple.jpg";
import pen from "./Icon/Pen.svg";
import Image from "./Icon/image1.svg";
import Hash from "./Icon/hash2.svg";
import Smile from "./Icon/smile3.svg";
import Map from "./Icon/map-pin4.svg";
import User from "./Icon/users5.svg";
import Clock from "./Icon/clock6.svg";
import Massage from "./Icon/message-circle7.svg";

const CreatePost = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="Holediv">
        <div className="Headdiv">
          <div className="leftdiv">
            <h6>Create Post</h6>
            <img src={Globe} alt="Error" />
            <p>Public</p>
            <img src={Clevron} alt="Error" />
          </div>
          <div className="rightdiv">
            <img src={Target} alt="Error" />
            <p>More</p>
            <img src={Clevron} alt="Error" />
          </div>
        </div>
        <div className="secondlastdiv">
          <img src={couple} alt="Error" />
          <p>Whats Going on?#Hashtag.... @Mention</p>
          <img src={pen} alt="Error" />
        </div>
        <div className="thirddiv"></div>
        <div className="Fourthdiv">
          <div className="headdiv">
            <p>Add to your post</p>
          </div>
          <div className="Imgdiv">
            <img src={Image} alt="Error" />
            <img src={Hash} alt="Error" />
            <img src={Smile} alt="Error" />
            <img src={Map} alt="Error" />
            <img src={User} alt="Error" />
            <img src={Clock} alt="Error" />
            <img src={Massage} alt="Error" />
          </div>
        </div>
        <div className="Lbutton">
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
