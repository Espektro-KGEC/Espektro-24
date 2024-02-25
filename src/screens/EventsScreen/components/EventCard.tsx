import '../components/eventCard.scss'
import '../types'
const EventCard = ({ name, photo, redirect, color }: EventsProps) => {
  return <div className="eventCard" style={{ backgroundColor: color }}>
    <img src={photo} alt={name} />
    <p>{name}</p>
    <div>
      <a href={redirect}>let's go</a>
    </div>
  </div>;
};

export default EventCard;
