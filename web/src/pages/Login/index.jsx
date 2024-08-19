import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsername } from "../../store/actions/dashboardActions";
import { registerNewUser } from "../../utils/wssConnection/wssConnection";
import "./LoginPage.css";

const LoginPage = ({ saveUsername }) => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmitButtonPressed = () => {
    if (username.trim() === "") return;
    registerNewUser(username);
    saveUsername(username);
    navigate("/video-chat");
  };

  return (
    <div className="login-page_container background_main_color">
      <div className="login-page_login_box background_secondary_color">
        <div className="login-page_title_container">
          <h2>Get started with Video Calling</h2>
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="button"
          value="Login"
          onClick={handleSubmitButtonPressed}
          className="login-page_button"
        >
          Login
        </button>
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: (username) => dispatch(setUsername(username)),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
