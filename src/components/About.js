import styles from "../styles/About.module.css";
import aboutImg from "../Images/patrick001.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const About = () => {
  const [arrow, setArrow] = useState(false);
  const clickArrow = () => {
    setArrow((cur) => !cur);
  };
  return (
    <section className={styles.wrap}>
      <div className={styles.info}>
        <img className={styles.aboutImg} src={aboutImg} alt="aboutImg" />
        <div>
          <h4>Developer</h4>
          <div className={styles.font}>About Me</div>
        </div>
        <FontAwesomeIcon
          onClick={clickArrow}
          icon={arrow ? faChevronUp : faChevronDown}
          className={styles.arrow}
        />
      </div>
        <div className={arrow ? styles.detail : styles.hide}>
          <div className={styles.detailInfo}>Name: Hyunwoo Kim</div>
          <div className={styles.detailInfo}>Email: duboo31@gmail.com</div>
          <div className={styles.detailInfo}>KaKao: zlwhs807@naver.com</div>
          <a className={styles.aTag} rel="noopener noreferrer" href="https://github.com/Duboo31" target="_blank">Github</a>
          <a className={styles.aTag} rel="noopener noreferrer" href="https://velog.io/@duboo" target="_blank">Blog</a>
        </div>
    </section>
  );
};

export default About;
