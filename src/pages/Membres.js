import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import styles from "./Membres.module.css";

const Membres = () => {
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
    navigate("/laureat");
  }, [navigate]);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className={styles.membres}>
      <div
        className={styles.informatiqueWrapper}
        onClick={onFrameContainerClick}
      >
        <div className={styles.informatique}>Informatique</div>
      </div>
      <div className={styles.mathWrapper}>
        <div className={styles.math}>Math</div>
      </div>
      <div className={styles.anglaisWrapper}>
        <div className={styles.math}>Anglais</div>
      </div>
      <div className={styles.physiqueWrapper}>
        <div className={styles.math}>Physique</div>
      </div>
      <div className={styles.tmwWrapper}>
        <div className={styles.math}>TMW</div>
      </div>
      <div className={styles.smerWrapper}>
        <div className={styles.math}>SMER</div>
      </div>
      <div className={styles.svtWrapper}>
        <div className={styles.svt}>SVT</div>
      </div>
      <div className={styles.franaisWrapper}>
        <div className={styles.math}>Français</div>
      </div>
      <div className={styles.ecoleNormaleSuperiere}>
        Ecole Normale Superiere De Rabat
      </div>
      <div className={styles.choisissezLeDpartementContainer}>
        <p className={styles.choisissezLeDpartement}>
          Choisissez le département dans lequel vous souhaitez voir les inscrits
        </p>
        <p className={styles.choisissezLeDpartement}>​</p>
      </div>
      <Item
        item="Log in"
        showItem
        itemTop="23px"
        itemLeft="943px"
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
        itemTop="24px"
        itemLeft="1092px"
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
        itemTop="23px"
        itemLeft="680px"
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
      <div className={styles.instagramParent}>
        <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
        <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
        <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
        <img className={styles.linkedinIcon} alt="" src="/linkedin2.svg" />
        <div className={styles.contacterNous}>Contacter-nous</div>
        <img
          className={styles.messageFillIcon}
          alt=""
          src="/message-fill@2x.png"
        />
        <img className={styles.sendFillIcon} alt="" src="/send-fill@2x.png" />
      </div>
    </div>
  );
};

export default Membres;
