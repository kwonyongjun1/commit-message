import React from 'react'
import { useSelector} from "react-redux";

export default function ResultList() {

    const type = useSelector(state => state.Message.type);
    
    return(
        <div>
           ResultList 컴포넌트
           { type }
        </div>
    );
}