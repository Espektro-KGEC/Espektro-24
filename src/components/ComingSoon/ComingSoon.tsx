import Lottie from "lottie-react";
import ComingSoonAnimation from "../../../design/coming-soon-lottie.json";
import styles from "./styles.module.scss";
import ParticlesBackground from "./particles";

const ComingSoon = () => {
  return (
    <>
      <ParticlesBackground />
      <div className={styles.coming_soon__container}>
        <div className={styles.glow} />
        <Lottie
          animationData={ComingSoonAnimation}
          className={styles.coming_soon}
        />
        <div className={styles.coming_soon__info}>
          <h2>
            <span role="img" aria-label="construction">
              🚧
            </span>{" "}
            We are coming Soon!
          </h2>
          <p>
            Our website is under construction. Leave your email here to get
            notified when we launch.
          </p>
          <form className={styles.coming_soon__form}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Notify Me!</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;