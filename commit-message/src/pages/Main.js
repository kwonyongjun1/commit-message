import React from 'react'
import LeftCommitMessage from '../components/LeftCommitMessage';
import EmojiList from '../components/EmojiList';
import TypeList from '../components/TypeList';
import HistoryList from '../components/HistoryList';
import { useSelector } from 'react-redux';
import {STATE} from "../constants"

export default function MainPage() {
    const state = useSelector(state => state.Message.currentState);
    
    return(
        <div className='mainBody'>
            <LeftCommitMessage/>    
            { state === STATE.EMOJI_MODE && <EmojiList/>}
            { state === STATE.TYPE_MODE && <TypeList/>}
            { state === STATE.HISTROY_MODE && <HistoryList/>}

        </div>
    );
}