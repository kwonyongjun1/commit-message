import React from 'react'
import LeftCommitMessage from '../components/LeftCommitMessage';
import ContentsList from '../components/ContentsList';
import EmojiList from '../components/EmojiList';
import SlideList from '../components/SlideList'
export default function MainPage() {
    return(
        <div className='mainBody'>
            <LeftCommitMessage/>
            <EmojiList/>
        </div>
    );
}