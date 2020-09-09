import React from "react";
import moment from "moment";
import placeholder from "../../assets/img/events/event_placeholder.jpg";
import userPicture from "../../assets/img/login/placeholder.png";
import { FaMapMarker, FaCalendar } from "react-icons/fa";

const EventListItem = ({ event }) => {
  return (
    <div className="mx-2">
      <a id="EventListItem" class="card post-preview lift h-100" href="#!">
        {event.picture ? (
          <img class="card-img-top" src={event.picture} alt="..." />
        ) : (
          <img class="card-img-top" src={placeholder} alt="..." />
        )}
        
        <div class="card-body">
                <a
                  class="badge badge-marketing badge-secondary-soft badge-pill text-secondary mb-3"
                  href="#!"
                >
                  Web
                </a>
                <h5 class="card-title">{event.title}</h5>
              </div>
              <div class="card-footer">
                <div className=" d-flex justify-content-between">
                  <div className=" p-1">
                    <FaMapMarker className="fa-fw text-primary" />{" "}
                    <span>{event.location}</span>
                  </div>
                  <div className="p-1">
                    <FaCalendar className="fa-fw text-primary" />{" "}
                    <span>{moment(event.start).format("MMM Do YY")}</span>
                  </div>
                  <div className=" p-1">
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
                    <span>event.author</span>
                  </div>
                </div>{" "}
              </div>
      </a>
    </div>
  );
};

export default EventListItem;
