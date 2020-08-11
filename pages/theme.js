import styles from "@styles/theme.module.css";

const ColorTile = ({ color, border = false }) => (
  <div className={styles.colorTile}>
    <div
      className={styles.colorTileSwatch}
      style={{
        background: `${color}`,
        border: border ? "1px solid #ccc" : "none",
      }}
    ></div>
    <p>{color}</p>
  </div>
);

const Colors = () => {
  return (
    <div className={styles.colors}>
      <ColorTile color="var(--text)"></ColorTile>
      <ColorTile color="var(--background)" border></ColorTile>
      <ColorTile color="var(--primary)"></ColorTile>
    </div>
  );
};

const TypeScale = () => {
  const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];
  return (
    <>
      {fontSizes.map((size, index) => (
        <p key={index} style={{ fontSize: size }}>{`${size}px`}</p>
      ))}
    </>
  );
};

const Space = () => {
  const space = [0, 4, 8, 16, 32, 64];
  return (
    <div className={styles.space}>
      {space.map((size, index) => (
        <p key={index}>{`${size}px`}</p>
      ))}
    </div>
  );
};

const Theme = () => {
  return (
    <div className={styles.themePage}>
      <h1>Theme</h1>
      <h2>Colors</h2>
      <Colors />
      <h2>Type Scale</h2>
      <TypeScale />
      <h2>Space</h2>
      <Space />
    </div>
  );
};

export default Theme;
