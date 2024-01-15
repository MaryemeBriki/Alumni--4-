import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "../components/FacebookIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import Item from "../components/Item";
import styles from "./Home.module.css";

const Home = () => {
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

  const onFrameContainerClick = useCallback(() => {
    navigate("/inscription");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/membres");
  }, [navigate]);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <img
        className={styles.bannierelivres1Icon}
        alt=""
        src="/bannierelivres-1@2x.png"
      />
      <div className={styles.alumni}>
        <span>{` `}</span>
        <span className={styles.a}>A</span>
        <span>LU</span>
        <span className={styles.a}>M</span>
        <span>NI</span>
      </div>
      <div
        className={styles.inscriptionWrapper}
        onClick={onFrameContainerClick}
      >
        <div className={styles.inscription}>Inscription</div>
      </div>
      <img className={styles.removal1Icon} alt="" src="/removal-1@2x.png" />
      <div className={styles.homeChild} />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <div className={styles.membresWrapper} onClick={onFrameContainer1Click}>
        <div className={styles.membres}>Membres</div>
      </div>
      <FacebookIcon
        dimensions="/facebook.svg"
        propHeight="4.88%"
        propWidth="3.47%"
        propTop="89.29%"
        propRight="47.27%"
        propBottom="5.83%"
        propLeft="49.25%"
      />
      <LinkedinIcon
        dimensions="/linkedin.svg"
        propHeight="4.88%"
        propWidth="3.47%"
        propTop="89.29%"
        propRight="41.47%"
        propBottom="5.83%"
        propLeft="55.06%"
      />
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
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <img className={styles.um5Icon} alt="" src="/um5@2x.png" />
      <img className={styles.alumniIcon} alt="" src="/alumni@2x.png" />
    </div>
  );
};

export default Home;
