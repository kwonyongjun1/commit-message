import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setAutoMode, setType, setCurrentState, setEmoji } from "../redux/actions/Message";
import {STATE} from "../constants";
import { findEmojiFromRelType} from "../utils";

export default function Message() {

    const dispatch = useDispatch();
    const autoMode = useSelector(state => state.Message.autoMode);
    const emoji = useSelector(state => state.Message.emoji);
    const type = useSelector(state => state.Message.type);

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
        const message = {
            emoji: "",
            type: "",
            scope: "",
            shortSummary: "",
            body: "",
            footer: "",
          };
        //copy_message(message);
    };


    return(
        
        <section className = "left-wrap">
        <header>
            <span>Commit-Message</span>
        </header>
        <div className="setting-area">
            {/* <div className="form-check form-switch">
                <label className="form-check-label" for="flexSwitchCheckChecked">EmojiAuto</label>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
            </div>
            <div className="form-check form-switch">
                <label className="form-check-label" for="flexSwitchCheckChecked">Auto</label>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
            </div> */}

            <button onClick={onClickToggleAuto}> auto </button>

        </div>
        <article className="commit-message">
            <header>
            <button id="emoji" onClick={onClickEmoji}>{emoji}</button>
            <button id="type">Feat</button>
            {/* <input type="text" id="type" placeholder="type" onClick = {onClickType} onChange={onChangeType}/> */}
            <input type="text" id="scope" placeholder="scope" onChange={onChangeScope}/>
            :
            <input type="text" id="shortSummary" placeholder="make log easier (#123)"/>
            </header>
            <div className = "body">
            <textarea id="commitBody" placeholder="body" onChange={onChangeBody}></textarea>
            <textarea id="commitFooter" placeholder="footer" onChange={onChangeFooter}></textarea>
            </div>
            <div className="footer">
            <button onClick={copyMessage}>
                copy
            </button>
            <button>
                history
            </button>
            </div>
        </article>
        </section>
        
        
    );
}