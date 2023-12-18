import React from 'react'
import LeftCommitMessage from '../components/LeftCommitMessage';
import ContentsList from '../components/ContentsList';
import SlideList from '../components/SlideList'
export default function MainPage() {
    return(
        <div>
            <LeftCommitMessage/>
            <ContentsList/>
        </div>
    );
}