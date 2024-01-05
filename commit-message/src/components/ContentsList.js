import React from 'react';
import {useSelector} from "react-redux";
import {STATE} from "../constants";
import EmojiList from "./EmojiList";
import TypeList from "./TypeList";
export default function ContentsList() {
    var 탭UI = { 
        info : <p>상품정보</p>,
        shipping : <p>배송관련</p>,
        refund : <p>환불약관</p>
      }
      
      function Component() {
        var 현재상태 = 'info';
        return (
          <div>
            {
              탭UI[현재상태]
            }
          </div>
        )
      } 

    const state = useSelector(state => state.Message.currentState);
    return(
        <div>
            {
                {
                    STATE.EMOJI_MODE : <EmojiList/>,
                    STATE.TYPE_MODE : <TypeList/>
                }[state]
            }
          
        </div>
    );
}