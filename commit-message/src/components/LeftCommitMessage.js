import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setAutoMode, setType, setCurrentState, setEmoji } from "../redux/actions/Message";
import {STATE} from "../constants";
import { findEmojiFromRelType} from "../utils";

export default function Message() {

    const dispatch = useDispatch();
    const autoMode = useSelector(state => state.Message.autoMode);
    const emoji = useSelector(state => state.Message.emoji);
    const [scope, setScope] = useState();
    const [body, setBody] = useState();
    const [footer, setFooter] = useState();

    const onClickToggleAuto = () => {
        dispatch(setAutoMode(!autoMode));      
    };

    const onClickEmoji = () =>{
        dispatch(setCurrentState(STATE.EMOJI_MODE));
    };

    const onChangeType = (e) => {
        dispatch(setType(e.target.value));
        if(true){ // todo Toggle 모드 
            let emoji = findEmojiFromRelType(e.target.value);
            if(emoji){
                dispatch(setEmoji(emoji.emoji));
            }
        }
    };

    const onClickType = () => {
        dispatch(setCurrentState(STATE.TYPE_MODE));
    };

    const onChangeScope = (event) => {
        setScope(event.target.value);
    };

    const onChangeBody = (event) => {
        setBody(event.target.value);
    };

    const onChangeFooter = (event) => {
        setFooter(event.target.value);
    };

    // todo
    const copyMessage = () => {
        console.log(scope);
        console.log(body);
        console.log(footer);
    };


    return(
        <div>
           <article>
                {/* <label for="KoreaRadio">한국어</label>
                <input type="radio" id="KoreaRadio" name="languageOptions" value="KO"/>
                <label for="EnglishRadio">English</label>
                <input type="radio" id="EnglishRadio" name="languageOptions" value="EN"/> */}
                
                <button onClick={onClickToggleAuto}> auto </button>
                <header>
                    <button id="emoji" onClick={onClickEmoji}>{emoji}</button>
                    <input type="text" id="type" placeholder="type" onClick = {onClickType} onChange={onChangeType}/>
                    :
                    <input type="text" id="scope" placeholder="scope" onChange={onChangeScope}/>
                </header>    
                
                <textarea id="body" placeholder="body" onChange={onChangeBody}>
                </textarea>

                <textarea id="footer" placeholder="footer" onChange={onChangeFooter}>
                </textarea>
           </article>

           <button onClick={copyMessage}>저장</button>
        </div>
    );
}