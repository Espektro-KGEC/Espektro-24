import React from "react";
import '../EventsScreen/style.scss'
import EventCard from "./components/EventCard";
import img from '../../../design/events/events-background.jpg';
import {DARK_COLORS} from '../../utils/Styles';
const EventsPage: React.FC = () => {
const exoticaColor=DARK_COLORS.SECONDARY_BLUE;
const techtixColor=DARK_COLORS.SECONDARY_ORANGE;
const quixineColor=DARK_COLORS.SECONDARY_YELLOW;
  return (
    <>
      <div className="main">
        <div className="events">
          <header>EVENTS</header>
          <section>
            <h1>DAY 0</h1>
            <div className="event">
              <h2 style={{color:exoticaColor}}>Exotica</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
              </main>
            </div>
            <div className="event">
              <h2 style={{color:techtixColor}}>Techtix</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
              </main>
            </div>
            <div className="event">
              <h2 style={{color:quixineColor}}>quixine</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
              </main>
            </div>
          </section>
          <section>
            <h1>DAY 1</h1>
            <div className="event">
              <h2 style={{color:exoticaColor}}>Exotica</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
              </main>
            </div>
            <div className="event">
              <h2 style={{color:techtixColor}}>Techtix</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
              </main>
            </div>
            <div className="event">
              <h2 style={{color:quixineColor}}>quixine</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
              </main>
            </div>
          </section>
          <section>
            <h1>DAY 2</h1>
            <div className="event">
              <h2 style={{color:exoticaColor}}>Exotica</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
              </main>
            </div>
            <div className="event">
              <h2 style={{color:techtixColor}}>Techtix</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
              </main>
            </div>
            <div className="event">
              <h2 style={{color:quixineColor}}>quixine</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
              </main>
            </div>
          </section>
          <section>
            <h1>DAY 3</h1>
            <div className="event">
              <h2 style={{color:exoticaColor}}>Exotica</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
                <EventCard name="event name" photo={img} redirect="" color={exoticaColor} />
              </main>
            </div>
            <div className="event">
              <h2 style={{color:techtixColor}}>Techtix</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
                <EventCard name="event name" photo={img} redirect="" color={techtixColor} />
              </main>
            </div>
            <div className="event">
              <h2 style={{color:quixineColor}}>quixine</h2>
              <main>
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
                <EventCard name="event name" photo={img} redirect="" color={quixineColor} />
              </main>
            </div>
          </section>
        </div>
      </div>
    </>

  );
};

export default EventsPage;
