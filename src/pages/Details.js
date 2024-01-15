import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import styles from "./Details.module.css";

const Details = () => {
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
    <div className={styles.details}>
      <img className={styles.detailsChild} alt="" src="/ellipse-1@2x.png" />
      <div className={styles.nomPrnom}>Nom Prénom</div>
      <div className={styles.spcialisationParent}>
        <div className={styles.spcialisation}>Spécialisation:</div>
        <div className={styles.anneDinscription}>Année d’inscription :</div>
        <div className={styles.anneDeDiplome}>Année de diplome :</div>
        <div className={styles.adresseEMail}>Adresse e-mail :</div>
        <div className={styles.ville}>ville :</div>
        <div className={styles.titreDePoste}>Titre de poste actuelle :</div>
        <div className={styles.profilLinkedln}>Profil Linkedln :</div>
        <div className={styles.nomDeLentreprise}>
          Nom de l’entreprise actuelel :
        </div>
      </div>
      <div className={styles.detailsItem} />
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
    </div>
  );
};

export default Details;
