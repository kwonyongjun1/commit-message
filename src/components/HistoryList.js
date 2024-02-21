import React, { useEffect, useState } from 'react';
import { setType, setEmoji, setShortSummary, setScope, setBody, setFooter } from '../redux/actions/Message';
import { useDispatch } from 'react-redux';

export default function HistoryList() {
    const dispatch = useDispatch();
    useEffect(() => {
        init();
    }, []);

    const [historyMessage, setHistoryMessage] = useState([]);

    const init = () => {
        let message = !!localStorage.getItem('preMessage') ? JSON.parse(localStorage.getItem('preMessage')) : [];
        setHistoryMessage(message);
    };

    const onClickMessage = (message) => {
        setMessage(message);
    };

    const onClickDelete = (id) => {
        deleteHistoryMessage(id);
        init();
    };

    const setMessage = (message) => {
        let { emoji, type, scope, shortSummary, body, footer } = message;
        dispatch(setEmoji(emoji));
        dispatch(setType(type));
        dispatch(setScope(scope));
        dispatch(setShortSummary(shortSummary));
        dispatch(setBody(body));
        dispatch(setFooter(footer));
    };

    const deleteHistoryMessage = (id) => {
        let historyMessage = !!localStorage.getItem('preMessage') ? JSON.parse(localStorage.getItem('preMessage')) : [];
        const deletedMessage = historyMessage.filter((message) => message.id != id);
        updateLocalStorageHistoryMessage(deletedMessage);
    };

    const updateLocalStorageHistoryMessage = (historyMessage) => {
        localStorage.setItem('preMessage', JSON.stringify(historyMessage));
    };

    return (
        <div className="middle-wrap">
            <div className="grid-container-history">
                {historyMessage.map((message) => (
                    <div
                        className="grid-item"
                        onClick={() => {
                            onClickMessage(message);
                        }}
                    >
                        <div className="commit-message">
                            <header
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                            >
                                <button id="emoji" disabled>
                                    {message.emoji}
                                </button>
                                <input className="type" type="text" placeholder="type" value={message.type} readOnly />
                                <input
                                    className="scope"
                                    type="text"
                                    placeholder="scope"
                                    value={message.scope}
                                    readOnly
                                />
                                :
                                <input
                                    className="shortSummary"
                                    type="text"
                                    placeholder="make log easier (#123)"
                                    value={message.shortSummary}
                                    readOnly
                                />
                                <button
                                    className="delete"
                                    onClick={() => {
                                        onClickDelete(message.id);
                                    }}
                                >
                                    X
                                </button>
                            </header>
                            <div className="body">
                                <div className="commitBody historyBox" placeholder="body" readOnly>
                                    {message.body}
                                </div>
                                <div className="commitFooter historyBox" placeholder="footer" readOnly>
                                    {message.footer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
