import React, { useEffect, useState } from 'react';
import { setType, setEmoji, setShortSummary, setScope, setBody, setFooter } from "../redux/actions/Message";
import { useDispatch } from "react-redux";

export default function HistoryList(){
    const dispatch = useDispatch();
    useEffect(() => {
        let message = localStorage.getItem("preMessage")
        setHistoryMessage(JSON.parse(message));
    }, []);

    const [historyMessage, setHistoryMessage] = useState([]);
   
    const onClickMessage = (message) =>{
        setMessage(message);
    }

    const onClickDelete = () =>{
        // TODO localstorage delete 
    }
    const setMessage = (message) =>{
        let { emoji, type, scope, shortSummary, body, footer } = message;
        dispatch(setEmoji(emoji));
        dispatch(setType(type));
        dispatch(setScope(scope));
        dispatch(setShortSummary(shortSummary));
        dispatch(setBody(body));
        dispatch(setFooter(footer));
    }

    return(
        <div className = "middle-wrap">
            <div className="grid-container-history">
                {historyMessage.map((message)=> (
                    <div className="grid-item" onClick={()=>{onClickMessage(message)}}>
                        <div className='commit-message'>
                            <header onClick={(event)=>{event.stopPropagation()}}>
                                <button id="emoji" disabled>{message.emoji}</button>
                                <input className="type" type="text" placeholder="type" value={message.type}/>
                                <input className="scope" type="text" placeholder="scope" value={message.scope}/>
                                :
                                <input className="shortSummary" type="text" placeholder="make log easier (#123)" value={message.shortSummary}/>
                                <button className="delete" onClick={onClickDelete}>X</button>
                            </header>
                            <div className = "body">
                                <div className="commitBody historyBox" placeholder="body">{message.body}</div>
                                <div className="commitFooter historyBox" placeholder="footer">{message.footer}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}