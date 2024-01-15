import { useMemo } from "react";
import styles from "./FacebookIcon.module.css";

const FacebookIcon = ({
  dimensions,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
}) => {
  const facebookIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft]);

  return (
    <img
      className={styles.facebookIcon}
      alt=""
      src={dimensions}
      style={facebookIconStyle}
    />
  );
};

export default FacebookIcon;
