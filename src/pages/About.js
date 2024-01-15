import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import styles from "./About.module.css";

const About = () => {
  const navigate = useNavigate();

  const onItemContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onItemContainer1Click = useCallback(() => {
    navigate("/Sign-up");
  }, [navigate]);

  const onItemContainer3Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className={styles.about}>
      <div className={styles.alumniEnsBienvenueSurLaPaWrapper}>
        <div className={styles.alumniEnsBienvenueContainer}>
          <p className={styles.alumniEns}>
            <b>ALUMNI ENS</b>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.bienvenueSurLa}>
            Bienvenue sur la page officielle d'Alumni ENS, l'association des
            anciens élèves de l'École normale supérieure (ENS). Nous sommes le
            lien vivant entre les générations d'étudiants de cette institution
            prestigieuse.et en la valeur d'une communauté unie.
          </p>
        </div>
      </div>
      <img className={styles.filleIcon} alt="" src="/fille@2x.png" />
      <div className={styles.aboutChild} />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
      <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
      <div className={styles.contacterNous}>Contacter-nous</div>
      <img
        className={styles.messageFillIcon}
        alt=""
        src="/message-fill@2x.png"
      />
      <img className={styles.sendFillIcon} alt="" src="/send-fill@2x.png" />
      <div className={styles.userFill} />
      <Item
        item="Log in"
        showItem
        itemTop="29px"
        itemLeft="886px"
        itemWidth="130px"
        itemHeight="40px"
        itemBorderRadius="16px"
        itemBorder="1px solid var(--color-mediumpurple-100)"
        itemBackgroundColor="unset"
        propColor="#000"
        propFontSize="20px"
        propTextAlign="center"
        onItemContainerClick={onItemContainerClick}
      />
      <Item
        item="Sign up"
        showItem
        itemTop="29px"
        itemLeft="1061px"
        itemWidth="130px"
        itemHeight="40px"
        itemBorderRadius="16px"
        itemBorder="1px solid var(--color-mediumpurple-100)"
        itemBackgroundColor="#7579d6"
        propColor="#f5f5f5"
        propFontSize="20px"
        propTextAlign="center"
        onItemContainerClick={onItemContainer1Click}
      />
      <div className={styles.item} onClick={onItemContainer2Click}>
        <div className={styles.item1}>Home</div>
      </div>
      <Item
        item="Rechrcher ...."
        showItem={false}
        itemTop="29px"
        itemLeft="602px"
        itemWidth="200px"
        itemHeight="40px"
        itemBorderRadius="16px"
        itemBorder="1px solid var(--color-mediumpurple-100)"
        itemBackgroundColor="unset"
        propColor="#000"
        propFontSize="36px"
        propTextAlign="left"
        onItemContainerClick={onItemContainer3Click}
      />
      <div className={styles.search}>Search</div>
      <img className={styles.homeFillIcon} alt="" src="/home-fill@2x.png" />
      <div className={styles.about1} onClick={onAboutTextClick}>
        About
      </div>
      <img className={styles.um5Icon} alt="" src="/um5@2x.png" />
      <img className={styles.alumniIcon} alt="" src="/alumni@2x.png" />
    </div>
  );
};

export default About;
