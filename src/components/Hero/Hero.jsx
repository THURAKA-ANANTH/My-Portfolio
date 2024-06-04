import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ada</h1>
        <p className={styles.description}>
        I'm a passionate full-stack developer with a solid foundation in React and NodeJS. Eager to apply my skills and learn more! Reach out if you'd like to connect!

        </p>
        <a href="anannthkumarthuraka@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/DSC_0581 copy-photoaidcom-cropped.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
