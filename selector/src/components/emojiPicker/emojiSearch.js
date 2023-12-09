import { useState } from "react"

import styles from "./emojiPicker.module.css";

export default function EmojiSearch({onSearch}){
    const [value, setValue] = useState('');

    function handleChange(e){
        setValue(e.target.value)
        onSearch(e)
    }
    return <input type="text" onChange={handleChange} value={value} className={styles.search}/>
}