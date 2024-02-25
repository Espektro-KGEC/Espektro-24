import React from "react";
import '../EventsScreen/style.scss'
import EventCard from "./components/EventCard";
import img from '../../../design/events/events-background.jpg'
const EventsPage: React.FC = () => {
  return (
    <>
      <div className="main">
        <div className="events">
          <header>EVENTS</header>
          <section>
            <h1>DAY 0</h1>
            <div className="event">
              <h2>Exotica</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color="blue" />
                <EventCard name="event name" photo={img} redirect="" color="blue" />
                <EventCard name="event name" photo={img} redirect="" color="blue" />
                <EventCard name="event name" photo={img} redirect="" color="blue" />
              </main>
            </div>
            <div className="event">
              <h2>Techtix</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color="orange" />
                <EventCard name="event name" photo={img} redirect="" color="orange" />
                <EventCard name="event name" photo={img} redirect="" color="orange" />
              </main>
            </div>
          </section>
        </div>
      </div>
    </>

  );
};

export default EventsPage;
