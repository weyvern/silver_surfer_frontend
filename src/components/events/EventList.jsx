import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Spinner } from "react-rainbow-components";
import EventListItemVertically from "./EventListItem_vertically";
import Event from "./Event";
import Modal from "./Modal";

const events = [
  {
    title: "Board Game Night",
    start: "2020-09-18",
    end: "2020-09-18",
    _id: 1,
    description: "Let's play board games together and have a fun evening. Please bring all the games you want to play. We start at 8pm. I you can't participate please leave a message",
    location: "Berlin, DE",
    categories: ["games", "group"],
    author: "Lila Khedira",
    participants: 6,
    participant: true
  },
  {
    title: "Food Tour",
    start: "2020-09-18",
    end: "2020-09-18",
    display: "background",
    color: "#ff9f89",
    participant: false,
    _id: 2,
    description: "This is the ddescription of event2",
    location: "New York, US",
    categories: ["food", "active"],
    author: "Sarah Hell",
    participants: 23
  },
  {
    title: "City Tour",
    start: "2020-09-18",
    end: "2020-09-18",
    display: "background",
    color: "#ff9f89",
    participant: false,
    _id: 3,
    description: "This is the ddescription of event1",
    location: "Berlin, DE",
    categories: ["active", "group"],
    author: "Tim Schmidt",
    participants: 2
  },
  {
    title: "See my city",
    start: "2020-09-18",
    end: "2020-09-18",
    display: "background",
    color: "#ff9f89",
    participant: false,
    _id: 4,
    description: "This is the ddescription of event1",
    location: "Berlin, DE",
    categories: ["active", "group"],
    author: "Klaus Meier",
    participants: 34
  },
  {
    title: "Museum Tour",
    start: "2020-09-15",
    end: "2020-09-15",
    participant: true,
    _id: 5,
    description: "This is the ddescription of event1",
    location: "Berlin, DE",
    categories: ["culture", "group"],
    author: "Lisa Müller",
    participants: 17
  },
  {
    title: "event 6",
    start: "2020-09-02",
    end: "2020-09-04",
    display: "background",
    color: "#ff9f89",
    participant: false,
    _id: 6,
    description: "This is the ddescription of event1",
    location: "Berlin, DE",
    categories: ["sewing", "group"],
    author: "Sandra Möller",
    participants: 10
  }
];
  
const loading = false;
const initialState = { title: "Upcoming Events" };

const EventList = () => {
  const [showModalEvent, setShowModalEvent] = useState({ show: false });
  const [eventTitle, setEventTitle] = useState(initialState);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const history = useHistory();

  const renderEventsVertically = (events) => {
    if (loading) return <Spinner />;
    return events.map((event) => (
      <EventListItemVertically event={event} key={event._id} onClick={handleEventClick} />
    ));
  };

  const handleDateClick = (info) => {
    setEventTitle({ title: `Upcoming Events on ${info.dateStr}` });
    //filter eventlist according to set start date
   let filteredEvents = events.filter(event => event.start === info.dateStr);
   setFilteredEvents(filteredEvents);
    //alert("Clicked on: " + info.dateStr);
  };

  const hideModal = () => {
    setShowModalEvent({...showModalEvent, show: false });
  };

  const handleEventClick = (idx) => {
    //info.jsEvent.preventDefault();
	console.log(typeof idx);
    //let eventIdx = events.findIndex()
    setShowModalEvent({...showModalEvent, idx: idx, show: true });
  };

  return (
    <section id="events" className="m-3 vh-100">
      <div className="row">
        <div className="col-5 d-flex flex-column justify-content-between">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            eventClick={(e) => handleEventClick(e.event.extendedProps._id)}
            initialView="dayGridMonth"
			events={{ events, color: "var(--primary)" }}
		
            dateClick={handleDateClick}
          />
		   <div class="text-center">
        <button
          className="btn btn-primary btn-marketing rounded-pill mt-4 "
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
        </div>
        <div className="col ml-5" >
          <h4>{eventTitle.title}</h4>
		  <div id="test" style={{backgroundColor: "transparent"}}>{filteredEvents.length === 0? <div>No event on that day</div>: renderEventsVertically(filteredEvents)}</div>
       
        </div>
      </div>
   
      <Modal show={showModalEvent.show} handleClose={hideModal}>
	  <Event event={/*events.find((event) => event._id === showModalEvent.idx)*/ events[0]} />
      </Modal>{" "}
     
    </section>
  );
};

export default EventList;

/**/
