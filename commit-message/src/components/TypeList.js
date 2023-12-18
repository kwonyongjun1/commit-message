import React from 'react'
import { useSelector} from "react-redux";

export default function TypeList() {
    const type = useSelector(state => state.Message.type);

    return(
        <div>
           TypeList 컴포넌트
           {type}
        </div>
    );
}