import styles from "./DotDrop.module.css";

/**
 * A green dot that falls into place and lands with a small splash
 * (squash, ring, four droplets). Size and position come from the
 * className/style given by the parent; everything inside scales with it.
 *
 * delay: seconds before the fall starts. fall: how far above it starts.
 */
export default function DotDrop({
  className = "",
  style,
  delay = 0.3,
  fall = "-80px",
}: {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  fall?: string;
}) {
  return (
    <span
      aria-hidden
      className={`${styles.slot} ${className}`}
      style={{ ...style, "--delay": `${delay}s`, "--fall": fall } as React.CSSProperties}
    >
      <span className={styles.dot} />
      <span className={styles.ring} />
      <span className={styles.drop} style={{ "--dx": "-470%", "--dy": "-370%" } as React.CSSProperties} />
      <span className={styles.drop} style={{ "--dx": "-260%", "--dy": "-580%" } as React.CSSProperties} />
      <span className={styles.drop} style={{ "--dx": "315%", "--dy": "-525%" } as React.CSSProperties} />
      <span className={styles.drop} style={{ "--dx": "525%", "--dy": "-315%" } as React.CSSProperties} />
    </span>
  );
}
