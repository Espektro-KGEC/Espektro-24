import OutlinedHeading from '@/components/outlined-heading';
import styles from './style.module.scss';
const BaseAWSURL =
  'https://res.cloudinary.com/dgc9mpvvw/image/upload/v1705041136/espektro/2023/clubs-logo/';
const CLUBS = [
  {
    id: 1,
    name: 'RIYAZ',
    image: `${BaseAWSURL}riyaz-logo.webp`,
    social_link: 'https://www.facebook.com/riyazkgec',
  },
  {
    id: 2,
    name: 'ELYSIUM',
    image: `${BaseAWSURL}elysium-logo.webp`,
    social_link: 'https://www.facebook.com/ElysiumKGEC',
  },
  {
    id: 3,
    name: 'SHUTTERBUG',
    image: `${BaseAWSURL}shutterbug-logo.webp`,
    social_link: 'https://www.facebook.com/shutterbugkgec',
  },
  {
    id: 4,
    name: 'CHITRANK',
    image: `${BaseAWSURL}chitrank-logo.webp`,
    social_link: 'https://www.facebook.com/groups/1500050480144825/',
  },
  {
    id: 5,
    name: 'LITMUS',
    image: `${BaseAWSURL}litmus-logo.webp`,
    social_link: 'https://www.facebook.com/litmusKGEC',
  },
  {
    id: 6,
    name: 'GDSC KGEC',
    image: `${BaseAWSURL}gdsc-kgec.webp`,
    social_link: 'https://www.facebook.com/dsckgec',
  },
  {
    id: 7,
    name: 'ROBOTICS SOCIETY',
    image: `${BaseAWSURL}robotics-society-logo.webp`,
    social_link: 'https://www.facebook.com/kgecrs',
  },
  {
    id: 8,
    name: 'SAC KGEC',
    image: `${BaseAWSURL}sac-kgec-logo.webp`,
    social_link: 'https://www.facebook.com/kgecSAC',
  },
  {
    id: 9,
    name: 'LES QUIZERABLES',
    image: `${BaseAWSURL}les-quizerable-logo.webp`,
    social_link: 'https://www.facebook.com/LesQuizerablesKgec',
  },
  {
    id: 10,
    name: 'INFINITIO',
    image: `${BaseAWSURL}infinitio-logo.webp`,
    social_link: 'https://www.facebook.com/infinitio.kgec',
  },
  {
    id: 11,
    name: 'KEYGEN CODERS',
    image: `${BaseAWSURL}keygen-coders-logo.webp`,
    social_link: 'https://www.facebook.com/KeyGEnCoders',
  },
  {
    id: 12,
    name: 'NOSCOPE',
    image: `${BaseAWSURL}noscope-logo.webp`,
    social_link: 'https://www.facebook.com/profile.php?id=100090429646028',
  },
  {
    id: 13,
    name: 'IMPOSTER',
    image: `${BaseAWSURL}imposter-logo.webp`,
    social_link: 'https://www.facebook.com/profile.php?id=100093346495217',
  },
  {
    id: 14,
    name: 'NOVA',
    image: `${BaseAWSURL}nova-logo.webp`,
    social_link: 'https://www.facebook.com/kgec.nova',
  },
  {
    id: 15,
    name: 'SPORTIX',
    image: `${BaseAWSURL}sportix-logo.webp`,
    social_link: 'https://www.facebook.com/profile.php?id=61551065199815',
  },
];

function ClubComponent() {
  return (
    <div className='sixth-section'>
    <section id="espektro-clubs" className={styles.ClubComponent__section}>
      <OutlinedHeading label="Our Clubs" />
      <div className={styles.ClubComponent__section__club__wrapper}>
        <ul>
          {CLUBS.map((club) => {
            return (
              <li key={club.id} list-id={`${club.id}`}>
                <a
                  href={club.social_link}
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <div>
                    <img src={club.image} alt={`${club.id}`} />
                  </div>
                  <div>
                    <p>{club.name}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section></div>
  );
}

export default ClubComponent;
