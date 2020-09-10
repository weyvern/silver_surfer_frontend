import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";
import "./people.css";
import userPicture from '../../assets/img/login/placeholder.png';

const PeopleItem = ({ person, type }) => {
  const authContext = useContext(AuthContext);
  const { userProfile, updateRelationship } = authContext;
  const [button, setButton] = useState("Add friend");
  const handleAction = async (e) => {
    e.preventDefault();
    updateRelationship(userProfile.username, person.username, type);
    setButton("Pending request");
  };
  useEffect(() => {});
  return (
    person && (
      <div className="card m-4">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
		  {person.profile_picture? ( <img
              src={person.profile_picture}
              className="rounded-circle"
              width="150px"
            />) :  ( <img
				src={userPicture}
				className="rounded-circle"
				width="100px"
			  />)}
           
          </div>
          <div className="d-flex flex-column align-items-center">
            <Link
              to={`/${person.username}`}
              className="ml-3 card-title text-decoration-none"
              style={{ color: "#686e73" }}
            >
              {`${person.name.first} ${person.name.last}`}
            </Link>
			{type !== null && (
            <button
              className="btn btn-primary btn-marketing rounded-pill m-4"
              onClick={(e) => handleAction(e)}
            >
              {button}
            </button>
          )}
          </div>
          
        </div>
      </div>
    )
  );
};

export default PeopleItem;
