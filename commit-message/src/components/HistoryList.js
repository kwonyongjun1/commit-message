import React, { useEffect, useState } from 'react';

export default function HistoryList(){

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
        // TODO setMessage
    }
    
    return(
        <div className = "middle-wrap">
            <div className="grid-container-history">
                {historyMessage.map((message)=> (
                    <div className="grid-item" onClick={()=>{onClickMessage(message)}}>
                        <div className='commit-message'>
                            <header onClick={(event)=>{event.stopPropagation()}}>
                                <button id="emoji" disabled>{item.emoji}</button>
                                <input className="type" type="text" placeholder="type" value={item.type}/>
                                <input className="scope" type="text" placeholder="scope" value={item.scope}/>
                                :
                                <input className="shortSummary" type="text" placeholder="make log easier (#123)" value={item.shortSummary}/>
                                <button onClick={onClickDelete}>삭제</button>
                            </header>
                            <div className = "body">
                                <div className="commitBody historyBox" placeholder="body">{item.body}</div>
                                <div className="commitFooter historyBox" placeholder="footer">{item.footer}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}