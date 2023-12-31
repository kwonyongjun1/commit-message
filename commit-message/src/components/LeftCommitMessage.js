import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setAutoMode, setType, setCurrentState, setEmoji, setShortSummary, setScope, setBody, setFooter } from "../redux/actions/Message";
import {STATE} from "../constants";
import { findEmojiFromRelType, copyMessage } from "../utils";
import Form from 'react-bootstrap/Form';

export default function Message() {

    const dispatch = useDispatch();
    const autoMode = useSelector(state => state.Message.autoMode);
    const emoji = useSelector(state => state.Message.emoji);
    const type = useSelector(state => state.Message.type);
    const shortSummary = useSelector(state => state.Message.shortSummary);
    const scope = useSelector(state => state.Message.scope);
    const body = useSelector(state => state.Message.body);
    const footer = useSelector(state => state.Message.footer);

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
        dispatch(setScope(event.target.value));
    };

    const onChangeShortSummary = (event) =>{
        dispatch(setShortSummary(event.target.value));
    };

    const onChangeBody = (event) => {
        dispatch(setBody(event.target.value));
    };

    const onChangeFooter = (event) => {
        dispatch(setFooter(event.target.value));
    };

    const onClickCopy = () => {
        copy();
        // window.localStorage.setItem(key, value)
    };

    const onCLickHistory = () => {
        dispatch(setCurrentState(STATE.HISTROY_MODE));
    }

    const copy = () => {
        if(!!emoji && !!type && !!shortSummary){
            const message = {
                emoji: emoji,
                type: type,
                scope: scope,
                shortSummary: shortSummary,
                body: body,
                footer: footer,
            };
            copyMessage({...message});
            saveLocal(message);
        }else{
            return alert("커밋 메시지를 작성해주세요");
        }
    };

    const saveLocal = (messeage) => {
        let preMessage = !!localStorage.getItem("preMessage") ? JSON.parse(localStorage.getItem("preMessage")) : [];
        preMessage.push(messeage);
        localStorage.setItem("preMessage", JSON.stringify(preMessage));
    }

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
            </div>
            <article className="commit-message">
                <header>
                    <button id="emoji" onClick={onClickEmoji}>{emoji}</button>
                    <input type="text" className="type" placeholder="type" value={type} onClick = {onClickType} onChange={onChangeType}/>
                    <input type="text" className="scope" placeholder="scope" value={scope} onChange={onChangeScope}/>
                    :
                    <input type="text" className="shortSummary" placeholder="make log easier (#123)" value={shortSummary} onChange={onChangeShortSummary}/>
                </header>
                <div className = "body">
                    <textarea className="commitBody" placeholder="body" value={body} onChange={onChangeBody}></textarea>
                    <textarea className="commitFooter" placeholder="footer" value={footer} onChange={onChangeFooter}></textarea>
                </div>
                <div className="footer">
                    <button onClick={onClickCopy}>
                        copy
                    </button>
                    <button>
                        clear
                    </button>
                    <button onClick={onCLickHistory}>
                        history
                    </button>
                </div>
            </article>
        </section>
    );
}