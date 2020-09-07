import React from 'react';
import moment from "moment";
import placeholder from '../../assets/img/events/event_placeholder.jpg';
import userPicture from '../../assets/img/login/placeholder.png';


const EventListItem = ({event}) => {

	return (
        <a class="card post-preview lift h-100" href="#!">
            {event.picture? <img class="card-img-top" src={event.picture} alt="..." /> : <img class="card-img-top" src={placeholder} alt="..." />}
        <div class="card-body">
            <h5 class="card-title">{event.title}</h5>
            <p class="card-text">{event.description}</p>
        </div>
        <div class="card-footer">
            <div class="post-preview-meta">
            {event.userPicture? <img class="post-preview-meta-img" src={event.picture} alt="..." /> : <img class="post-preview-meta-img" src={userPicture} alt="..." />}
                <div class="post-preview-meta-details">
                    <div class="post-preview-meta-details-name">Aariz Fischer // event.author</div>
                    <div class="post-preview-meta-details-date">{moment(event.date).format("MMM Do YY")}</div>
                </div>
            </div>
        </div></a>
  );
};

export default EventListItem;
