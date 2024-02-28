import '../components/eventCard.scss';
import '../types';

const EventCard = ({ name, photo, color }: EventsProps) => {
  return (
    <div className="eventCard" style={{ backgroundColor: color }}>
      <img src={photo} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default EventCard;
