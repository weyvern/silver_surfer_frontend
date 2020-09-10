import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Spinner } from "react-rainbow-components";
import "./userProfile.css";
import 'react-tabs/style/react-tabs.css';
import userPicture from '../../assets/img/login/placeholder.png';

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const getUserProfile = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SOCIAL_SERVICE}/userprofiles/null/${username}`
    );
    setCurrentUser(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getUserProfile();
  }, [username]);
  return !loading ? (
    <div id="UserProfile">
      <div className="bg-primary-soft m-5 pb-3">
        <div className="custom_wrapper">
         {currentUser.profile_picture? (<img
            src={currentUser.profile_picture}
            alt={currentUser.username}
            className="profile_picture rounded-circle border"
            style={{ width: "12rem", height: "10rem" }}
          />) :  (<img
          src={userPicture}
          alt={currentUser.username}
          className="profile_picture rounded-circle border"
          style={{ width: "12rem", height: "10rem" }}
        />)}
        </div>

        <div className="profile_text d-flex justify-content-center w-100">
          <h1 className="ml-3 align-self-center">{`${currentUser.name.first} ${currentUser.name.last}`}</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center w-100">
          <Link to="/people" className="btn btn-primary btn-marketing rounded-pill m-4">
            People
          </Link>{" "}
          <Link to="/feed/createpost" className="btn btn-primary btn-marketing rounded-pill m-4">
            Write a story
          </Link>{" "}
          <Link to="/people" className="btn btn-primary btn-marketing rounded-pill m-4">
            Invite caretaker
          </Link>
        </div>
        <div className="  "></div>
      </div>
      <div>
        <div className="card m-5">
          <Tabs>
            <TabList>
              <Tab >About</Tab>
              <Tab>Latest Posts</Tab>
              <Tab>Upcoming Events</Tab>
            </TabList>
            <TabPanel>
              <div className="px-3">About</div>
            </TabPanel>
            <TabPanel>
              <div className="px-3">Latest Posts</div>
            </TabPanel>
            <TabPanel>
              <div className="px-3">Upcoming Events</div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default UserProfile;
