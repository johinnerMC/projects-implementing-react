import styles from "./emojiPicker.module.css";

export default function EmojiButton({ emoji, onClick }) {
  function handleClick() {
    onClick(emoji);
  }

  return <button onClick={handleClick} className={styles.emojiButton}>{emoji.symbol}</button>;
}
