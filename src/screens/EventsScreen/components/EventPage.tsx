import '../components/eventPage.scss';
import '../types';
import { DARK_COLORS } from '../../../utils/Styles';

const EventPage: React.FC = () => {
  
  const skyBlue = DARK_COLORS.SKY_BLUE;
  const orange = DARK_COLORS.SECONDARY_ORANGE;
  return (
    <>
      <div className='container'>
        <div className='cell start'>
          <div className='image_container'>
            <div className='overlay'>
              <p className='event_name'>Nritanjali</p>
              <p>Inter-College</p>
              <p>Dance Competition </p>
            </div>
            <img src='../../../../design/events/events-background.jpg' alt='' />
          </div>
          <div className='coordinator_container'>
            <p style={{ color: orange }}>Coordinator</p>
            <p style={{ color: skyBlue }}>John Doe: 9898877212</p>
            <p style={{ color: skyBlue }}>John Doe: 9898877212</p>
          </div>
        </div>
        <div className='cell mid'>
          <div className='event_description'>
            <p style={{ color: skyBlue }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              reprehenderit laborum accusamus maiores quo iste ab beatae enim,
              illum sed aliquid, fugit pariatur corporis quae voluptate ut ea
              magni debitis?
            </p>
          </div>
          <div className='event_guidelines'>
            <p style={{ color: orange }}>Event Guidelines</p>
            <ul style={{ color: skyBlue }}>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates explicabo odit fuga earum iure optio veniam maiores
                quaerat, beatae unde? Perferendis ab eveniet pariatur tenetur.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                aperiam!
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            </ul>
          </div>
          <div className='prize_pool'>
            <p style={{ color: orange }}>
              Prize Pool: <span style={{ color: skyBlue }}>₹ 10,000/-</span>
            </p>
          </div>
        </div>
        <div className='cell end'>
          <div className='poster_container'>
            <img src='../../../../design/events/events-background.jpg' alt='' />
          </div>
          <button style={{ backgroundColor: orange }}>
            <span> Register</span>
          </button>
          <div className='registration_deadline'>
            <p style={{ color: skyBlue }}>Registration Deadline </p>
            <p style={{ color: orange }}>22nd March,2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
