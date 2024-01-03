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
        <div className = "middle-wrap">
            <div className="grid-container">
            {emojiList.map((item) => (
                <dl className="grid-item"  key={item.id} onClick={()=>{onClickEmoji(item.id)}}>
                    <dt className="emoji">
                        {item.emoji}
                    </dt>
                    <dd className="emoji-detail">
                        {item.id}
                    </dd>
                </dl>
            ))}
            </div>
        </div>
    );
} 