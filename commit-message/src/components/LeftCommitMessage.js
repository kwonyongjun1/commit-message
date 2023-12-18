import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setAutoMode, setType, setCurrentState } from "../redux/actions/Message";
import {STATE} from "../constants";
export default function Message() {

    const dispatch = useDispatch();
    const autoMode = useSelector(state => state.Message.autoMode);
    
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
                <button onClick={onClickToggleAuto}> 토글 </button>
                <header>
                    <button id="emoji" onClick={onClickEmoji}>emoji</button>
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