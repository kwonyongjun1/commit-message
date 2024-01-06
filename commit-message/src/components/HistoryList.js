import React from 'react';

export default function HistoryList(){
    return(
        <div className = "middle-wrap">
            <div className="grid-container-history">
                <div className="grid-item">
                    <div className='commit-message'>
                        <header>
                            <button id="emoji">emoji</button>
                            <input className="type" type="text" placeholder="type"/>
                            <input className="scope" type="text" placeholder="scope" />
                            :
                            <input className="shortSummary" type="text" placeholder="make log easier (#123)"/>
                        </header>
                        <div className = "body">
                            <textarea className="commitBody" placeholder="body"></textarea>
                            <textarea className="commitFooter" placeholder="footer"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}