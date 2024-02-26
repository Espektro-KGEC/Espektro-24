import type { FC } from "react";
import ComingSoon from "../ComingSoon";
import styles from "./styles.module.scss";

const HomePage: FC = () => {
  return (
    <div className={styles.home__main__container}>
      <div>
        <ComingSoon />
      </div>
    </div>
  );
};

export default HomePage;
