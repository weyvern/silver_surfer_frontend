import React from "react";
import moment from "moment";
import placeholder from "../../assets/img/events/event_placeholder.jpg";
import userPicture from "../../assets/img/login/placeholder.png";
import { FaMapMarker, FaCalendar } from "react-icons/fa";

const EventListItemVertically = ({ event, onClick }) => {
  const renderCategories = (categories) => {
    return categories.map((category) => (
      <div class="badge badge-pill badge-secondary font-weight-normal p-1 mx-1">
        {category}
      </div>
    ));
  };

  return (
    <div className="mx-2 py-2" style={{backgroundColor: "transparent"}}>
      <a
        class="card mb-4 text-decoration-none"
        onClick={() => onClick(event._id)}
      >
        <div class="card-body p-0">
          <div class="row no-gutters">
            <div
              class="col-lg-4 img-fluid rounded-0"
              style={{
                background: `url(${placeholder}) center`,
                backgroundSize: "cover",
              }}
            ></div>
            <div class="col-lg-8 ">
              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <div class="d-flex single-post-meta-links align-items-center">
                    <i class="fas fa-users fa-fw"></i>
                    <p class="m-0 ml-1">{event.participants}</p>
                  </div>
                  <div class="text-right category">
                    {event.categories && renderCategories(event.categories)}
                  </div>
                </div>
                <div className="">
                  <h1 class="card-title py-4 m-0">{event.title}</h1>{" "}
                </div>
              </div>
              <div class="card-footer p-1">
                <div className=" d-flex justify-content-around">
                  <div className=" px-1">
                    <FaMapMarker className="fa-fw text-primary" />{" "}
                    <span>{event.location}</span>
                  </div>
                  <div className="px-1">
                    <FaCalendar className="fa-fw text-primary" />{" "}
                    <span>{moment(event.date).format("MMM Do YY")}</span>
                  </div>
                  <div className=" px-1">
                    {event.userPicture ? (
                      <img
                        class="avatar avatar-sm mr-1"
                        src={event.picture}
                        alt="..."
                      />
                    ) : (
                      <img
                        class="avatar avatar-sm mr-1"
                        src={userPicture}
                        alt="..."
                      />
                    )}
                    <span>{event.author}</span>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </a>
    </div>
  );
};

export default EventListItemVertically;
