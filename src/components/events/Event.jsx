import React from "react";
import moment from "moment";
import placeholder from "../../assets/img/events/event_placeholder.jpg";
import userPicture from "../../assets/img/login/placeholder.png";
import { FaMapMarker, FaCalendar } from "react-icons/fa";

const renderCategories = (categories) => {
 

  return categories.map((category) => (
    <div class="badge badge-pill badge-secondary font-weight-normal px-2 m-1 py-2">
      {category}
    </div>
  ));
};

const Event = ({ event }) => {
  return (
    <div className="m-2 card" style={{ overflowY: "auto" }}>
      <div className="row w-100">
        <div className="col-lg-6 d-flex flex-column justify-content-between">
          {event.picture ? (
            <img class="card-img-top " src={event.picture} alt="..." />
          ) : (
            <img class="card-img-top" src={placeholder} alt="..." />
          )}
          <div className="card-body d-flex flex-column justify-content-between">
            <div className="m-4 bg-light">
              <div className="list-group list-group-flush medium">
                <div className="list-group-item list-group-item-action">
                  <FaMapMarker className="fa-fw mr-2 text-primary" />{" "}
                  {event.location}
                </div>
                <div className="list-group-item list-group-item-action">
                  <FaCalendar className="fa-fw mr-2 text-primary" />{" "}
                  {moment(event.date).format("MMM Do YY")}
                </div>
                <div className="list-group-item list-group-item-action">
                  {event.userPicture ? (
                    <img
                      class="avatar avatar-sm mr-2"
                      src={event.picture}
                      alt="..."
                    />
                  ) : (
                    <img
                      class="avatar avatar-sm mr-2"
                      src={userPicture}
                      alt="..."
                    />
                  )}
                  {event.author}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-between">
       
          <div className="p-3">
          <div class="text-right py-2">
              {event.categories && renderCategories(event.categories)}
            </div>
            <h5 className="card-title text-truncate pt-2">
              {event.title}
            </h5>
            <p className="card-text">
              {event.description}
            </p>
          </div>
          <div class="text-center">
            <button
              className="btn btn-primary btn-marketing rounded-pill m-4"
              onClick={() => event.participant? alert("Cancel event") : alert("Take part")}
            >
              {event.participant? "Cancel event": "Take part"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
