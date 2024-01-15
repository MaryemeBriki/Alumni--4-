import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import styles from "./Inscription.module.css";

const Inscription = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [frameInput2Value, setFrameInput2Value] = useState("");
  const [frameInput3Value, setFrameInput3Value] = useState("");
  const [frameInput4Value, setFrameInput4Value] = useState("");
  const [frameInput5Value, setFrameInput5Value] = useState("");
  const [frameInput6Value, setFrameInput6Value] = useState("");
  const [frameInput7Value, setFrameInput7Value] = useState("");
  const [frameInput8Value, setFrameInput8Value] = useState("");
  const [frameInput9Value, setFrameInput9Value] = useState("");
  const [frameInput10Value, setFrameInput10Value] = useState("");
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
    navigate("/");
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
    <div className={styles.inscription}>
      <div className={styles.formulaireDinscription}>
        Formulaire d’inscription
      </div>
      <img
        className={styles.inscriptionChild}
        alt=""
        src="/ellipse-67@1x.png"
      />
      <button className={styles.importImageWrapper} disabled={true}>
        <div className={styles.importImage}>Import image</div>
      </button>
      <img
        className={styles.addRoundFillIcon}
        alt=""
        src="/add-round-fill@2x.png"
      />
      <div className={styles.nom}>
        <span>{`Nom `}</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.profilsLinkedin}>Profils LinkedIn</div>
      <div className={styles.nomDeLentrepriseContainer}>
        <p className={styles.nomDeLentreprise}>Nom de l'entreprise actuelle</p>
      </div>
      <div className={styles.titreDuPoste}>Titre du poste actuel</div>
      <div className={styles.spcialisation}>
        <span>Spécialisation</span>
        <span className={styles.span}>*</span>
        <span>{` `}</span>
      </div>
      <div className={styles.anneDinscription}>
        <span>Année d’inscription</span>
        <span className={styles.span}>*</span>
        <span>{` `}</span>
      </div>
      <div className={styles.anneDeDiplmeContainer}>
        <span>Année de diplôme</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.adresseEMail}>
        <span>Adresse e-mail</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.ville}>
        <span>Ville</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.dateNaissance}>
        <span>Date naissance</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.genre}>
        <span>{`Genre `}</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.prnom}>
        <span>Prénom</span>
        <span className={styles.span}>*</span>
      </div>
      <input
        className={styles.inscriptionItem}
        type="text"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
      <input
        className={styles.inscriptionInner}
        type="text"
        value={frameInput1Value}
        onChange={(event) => setFrameInput1Value(event.target.value)}
      />
      <input
        className={styles.frameInput}
        type="text"
        value={frameInput2Value}
        onChange={(event) => setFrameInput2Value(event.target.value)}
      />
      <input
        className={styles.inscriptionChild1}
        type="text"
        value={frameInput3Value}
        onChange={(event) => setFrameInput3Value(event.target.value)}
      />
      <input
        className={styles.inscriptionChild2}
        type="text"
        value={frameInput4Value}
        onChange={(event) => setFrameInput4Value(event.target.value)}
      />
      <input
        className={styles.inscriptionChild3}
        type="text"
        value={frameInput5Value}
        onChange={(event) => setFrameInput5Value(event.target.value)}
      />
      <input
        className={styles.inscriptionChild4}
        type="text"
        value={frameInput6Value}
        onChange={(event) => setFrameInput6Value(event.target.value)}
      />
      <input
        className={styles.inscriptionChild5}
        type="text"
        value={frameInput7Value}
        onChange={(event) => setFrameInput7Value(event.target.value)}
      />
      <input
        className={styles.inscriptionChild6}
        type="email"
        value={frameInput8Value}
        onChange={(event) => setFrameInput8Value(event.target.value)}
      />
      <input
        className={styles.inscriptionChild7}
        type="text"
        value={frameInput9Value}
        onChange={(event) => setFrameInput9Value(event.target.value)}
      />
      <input
        className={styles.inscriptionChild8}
        type="date"
        value={frameInput10Value}
        onChange={(event) => setFrameInput10Value(event.target.value)}
      />
      <div className={styles.femelle}>Femelle</div>
      <div className={styles.male}>Male</div>
      <input className={styles.ellipseInput} disabled={true} type="radio" />
      <input
        className={styles.inscriptionChild9}
        disabled={true}
        type="radio"
      />
      <div className={styles.annulerWrapper} onClick={onFrameContainerClick}>
        <div className={styles.annuler}>Annuler</div>
      </div>
      <div className={styles.sinscrireWrapper} onClick={onFrameContainer1Click}>
        <div className={styles.annuler}>s'inscrire</div>
      </div>
      <div className={styles.userFill} />
      <Item
        item="Log in"
        showItem
        itemTop="36px"
        itemLeft="893px"
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
        itemTop="36px"
        itemLeft="1068px"
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
        itemTop="36px"
        itemLeft="609px"
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
        <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
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

export default Inscription;
