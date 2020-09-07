import React from "react";
import moment from "moment";
import placeholder from "../../assets/img/events/event_placeholder.jpg";
import userPicture from "../../assets/img/login/placeholder.png";
import { FaMapMarker, FaCalendar } from "react-icons/fa";

const Event = ({ event }) => {
  return (
    <div className="m-2 card">
         <div className="row">
        <div className="col-lg-5">
        {event.picture ? (
            <img
              class="card-img-top float-left"
              style={{ maxHeight: "50%" }}
              src={event.picture}
              alt="..."
            />
          ) : (
            <div style={{ backgroundImage: `url(${placeholder})` }}></div>
          )}
        </div> 
        <div className="col-lg-7">

          <div className="card-body d-flex flex-column justify-content-between">
            
          <div className="m-4 bg-light">
            <div className="list-group list-group-flush medium">
              <div className="list-group-item list-group-item-action">
                <FaMapMarker className="fa-fw mr-2" /> {event.location}
              </div>
              <div className="list-group-item list-group-item-action">
                <FaCalendar className="fa-fw mr-2" />{" "}
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
               
                  Aariz Fischer // event.author
               
              </div>
            </div>
          </div>
        </div>
           
            
          </div>
       
        </div>
      <div className="row">
      <div className='col'>
          <h5 className="card-title text-truncate">{event.title}I am a event title</h5>
            <p className="card-text">{event.short_description}Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus ...</p>
          </div>
      </div>



  
    
        
      </div>
 
  );
};

export default Event;



/* 
*/