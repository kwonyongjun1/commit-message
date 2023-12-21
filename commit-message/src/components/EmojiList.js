import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { emojiList} from '../database/data';
import { findEmojiFromId} from "../utils"
import { setEmoji } from '../redux/actions/Message';
export default function EmojiList() {

    const dispatch = useDispatch();
    const onClickEmoji = (id) => {
        let emoji = findEmojiFromId(id);
        dispatch(setEmoji(emoji.emoji));
    };

    
    return(
        <div>
           emojiList 컴포넌트
           {emojiList.map((item) => (
            <div key={item.id} onClick={()=>{onClickEmoji(item.id)}}>
                <li>{item.id} {item.emoji}</li>
            </div>  
            ))}
        </div>
    );
} 