import React from "react";
import styles from '../../styles/Footer.module.css'
import { Link } from "react-router-dom";
import Logo from '../../images/logo.svg';
import { ROUTES } from "../../utils/routes";
const Footer = () => {
  return(
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by WhereUgo
      </div>
      <div className={styles.socials}>
        <a href="http://instagram.com" target="_blank">
            <svg className={styles.icon}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
            </svg>
        </a>
        <a href="http://facebook.com" target="_blank">
            <svg className={styles.icon}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
            </svg>
        </a>
      </div>
    </section>
  )
}

export default Footer