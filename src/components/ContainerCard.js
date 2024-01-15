import { useMemo } from "react";
import styles from "./ContainerCard.module.css";

const ContainerCard = ({
  imageDimensions,
  personName,
  propTop,
  onVoirLesDtails2Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.ellipseParent} style={frameDivStyle}>
      <img className={styles.frameChild} alt="" src={imageDimensions} />
      <div className={styles.ellipseGroup}>
        <img className={styles.frameChild} alt="" src="/ellipse-2@2x.png" />
        <div className={styles.maryemeBriki}>Maryeme Briki</div>
        <div className={styles.cleInfo}>CLE Info</div>
        <div className={styles.voirLesDtailsContainer}>
          <p className={styles.voirLesDtails}>{`>voir les détails`}</p>
        </div>
      </div>
      <div className={styles.maryemeBriki}>{personName}</div>
      <div className={styles.cleInfo}>CLE Info</div>
      <div
        className={styles.voirLesDtailsContainer1}
        onClick={onVoirLesDtails2Click}
      >
        <p className={styles.voirLesDtails}>{`>voir les détails`}</p>
      </div>
    </div>
  );
};

export default ContainerCard;
