import React from 'react'
import { emojiList} from '../database/data';
export default function EmojiList() {

    const test = () =>{
        console.log(emojiList);
    };
    return(
        <div>
           emojiList 컴포넌트
           {emojiList.map((item) => (
          <div key={item.id}>
              <li>{item.id} {item.emoji}</li>
          </div>  
        ))}
        </div>
    );
} 