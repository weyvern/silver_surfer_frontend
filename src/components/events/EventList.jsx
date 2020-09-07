import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Spinner } from "react-rainbow-components";

import EventListItem from "./EventListItem";
import Event from "./Event";
import Modal from "./Modal";

const events = [
  { title: "event 1", start: "2020-09-02", end: "2020-09-04", _id: 1, description: "This is the ddescription of event1" , location: "Berlin, DE"},
  { title: "event 2", start: "2020-09-010", end: "2020-09-010", _id: 2, description: "This is the ddescription of event2", location: "New York, US" },
];

const loading = false;

const EventList = () => {
  const [showModalEvent, setShowModalEvent] = useState({ show: false });
  const history = useHistory();

  const renderEvents = (events) => {
    if (loading) return <Spinner />;
    return events.map((event) => (
      <EventListItem event={event} key={event._id} />
    ));
  };

  const handleDateClick = (info) => {
    // bind with an arrow function

    alert("Clicked on: " + info.dateStr);
    alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
    alert("Current view: " + info.view.type);
    // change the day's background color just for fun
    info.dayEl.style.backgroundColor = "red";
  };

  const hideModal = () => {
    setShowModalEvent({ show: false });
  };

  const handleEventClick = ({ event }) => {
    //info.jsEvent.preventDefault();
    console.log(event);
	//let eventIdx = events.findIndex()
    setShowModalEvent({ show: true });
  };

  return (
    <section id="#events" className="row m-3">
      <div className="col-5">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          editable={true}
          eventClick={handleEventClick}
          initialView="dayGridMonth"
          events={{ events }}
          dateClick={handleDateClick}
        />
      </div>
        <Modal show={showModalEvent.show} handleClose={hideModal}>
          <Event event={events[0]} />
        </Modal>{" "}
      <div class="text-center">
        <button
          className="btn btn-primary btn-marketing rounded-pill m-4"
          onClick={() => history.goBack()}
        >
          <svg
            className="svg-inline--fa fa-arrow-right fa-w-14 ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-left"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <i className="fas fa-arrow-left ml-1"></i>
          </svg>{" "}
          Back
        </button>
      </div>
    </section>
  );
};

export default EventList;

/*<div className="col-7">
  <div className="row"><h4>Upcoming events</h4></div>
	  <div className="row event-row d-flex ">{renderEvents(events)}</div>
  
  </div>*/
