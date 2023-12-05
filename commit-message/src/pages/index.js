import React from 'react'
import LeftCommitMessage from '../components/LeftCommitMessage';
import ResultList from '../components/ResultList';
export default function MainPage() {
    return(
        <div>
            <LeftCommitMessage/>
            <ResultList/>            
        </div>
    );
}