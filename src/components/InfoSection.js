import React from "react";
import styles from "./InfoSection.module.css";


const InfoSection = () => {
  return (
    <div className={styles.InfoSection}>
      <div className={styles.textCenter}>
        <div className={styles.justifyContentCenter}>
          <img
            className="logo"
            src="https://accounts.nosres.com/images/accounts/logo.svg"
            alt="Nosres logo"
            style={{
              width: "30px",
              padding: "5PX"
            }}
          />
          <h2>nosres</h2>
        </div>
        <p className={styles.textBlack}>
          A Nosres Account allows users to access all Nosres services.
        </p>
        <img
          src="https://accounts.nosres.com/images/accounts/sign-in-image.png"
          className={styles.signInImage}
          alt="Sign-in visual aid"
        />
        <div className={styles.featuresContainer}>
          <div className={styles.featureBox}>
            <img
              src="https://accounts.nosres.com/images/accounts/market.png"
              alt="Market visual"
            />
          </div>
          <div className={styles.featureBox}>
            <img
              src="https://accounts.nosres.com/images/accounts/pay.png"
              alt="Payment visual"
            />
          </div>
        </div>
      </div>
    </div>
     
   
  );
};

export default InfoSection;
