import { useMemo } from "react";
import styles from "./Item.module.css";

const Item = ({
  item,
  showItem,
  itemTop,
  itemLeft,
  itemWidth,
  itemHeight,
  itemBorderRadius,
  itemBorder,
  itemBackgroundColor,
  propColor,
  propFontSize,
  propTextAlign,
  onItemContainerClick,
}) => {
  const itemStyle = useMemo(() => {
    return {
      top: itemTop,
      left: itemLeft,
      width: itemWidth,
      height: itemHeight,
      borderRadius: itemBorderRadius,
      border: itemBorder,
      backgroundColor: itemBackgroundColor,
    };
  }, [
    itemTop,
    itemLeft,
    itemWidth,
    itemHeight,
    itemBorderRadius,
    itemBorder,
    itemBackgroundColor,
  ]);

  const item1Style = useMemo(() => {
    return {
      color: propColor,
      fontSize: propFontSize,
      textAlign: propTextAlign,
    };
  }, [propColor, propFontSize, propTextAlign]);

  return (
    <div
      className={styles.item}
      style={itemStyle}
      onClick={onItemContainerClick}
    >
      {showItem && (
        <div className={styles.item1} style={item1Style}>
          {item}
        </div>
      )}
    </div>
  );
};

export default Item;
