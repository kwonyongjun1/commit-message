import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setAutoMode, setType, setCurrentState, setEmoji } from "../redux/actions/Message";
import {STATE} from "../constants";
import { findEmojiFromRelType, copyMessage} from "../utils";
import Form from 'react-bootstrap/Form';

export default function Message() {

    const dispatch = useDispatch();
    const autoMode = useSelector(state => state.Message.autoMode);
    const emoji = useSelector(state => state.Message.emoji);
    const type = useSelector(state => state.Message.type);
    const [shortSummary, setShortSummary] = useState();
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
        if(autoMode){
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

    const onChangeShortSummary = (event) =>{
        setShortSummary(event.target.value);
    };

    const onChangeBody = (event) => {
        setBody(event.target.value);
    };

    const onChangeFooter = (event) => {
        setFooter(event.target.value);
    };

    const onClickCopy = () => {
        copy();
    };

    const copy = () => {
        const message = {
            emoji: emoji,
            type: type,
            scope: scope,
            shortSummary: shortSummary,
            body: body,
            footer: footer,
          };
          
        copyMessage(message);
    };


    return(
        <section className = "left-wrap">
            <header>
                <span>Commit-Message</span>
            </header>
            <div className="setting-area">
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="EmojiAuto"
                        onClick={onClickToggleAuto}
                    />
                </Form>
                <button>Clear</button>

            </div>
            <article className="commit-message">
                <header>
                <button id="emoji" onClick={onClickEmoji}>{emoji}</button>
                <input type="text" id="type" placeholder="type" value={type} onClick = {onClickType} onChange={onChangeType}/>
                <input type="text" id="scope" placeholder="scope" onChange={onChangeScope}/>
                :
                <input type="text" id="shortSummary" placeholder="make log easier (#123)" onChange={onChangeShortSummary}/>
                </header>
                <div className = "body">
                <textarea id="commitBody" placeholder="body" onChange={onChangeBody}></textarea>
                <textarea id="commitFooter" placeholder="footer" onChange={onChangeFooter}></textarea>
                </div>
                <div className="footer">
                <button onClick={onClickCopy}>
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