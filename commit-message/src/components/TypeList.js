import React from 'react'
import { useSelector} from "react-redux";
import { typeList} from "../database/data"
export default function TypeList() {
    const type = useSelector(state => state.Message.type);

    return(
        <div>
           TypeList 컴포넌트
           <br/>
           검색한 내용 : {type}
           {typeList.map((item) => (
            <div key={item.name}>
                <li>{item.name} {item.description}</li>
            </div>  
            ))}
        </div>
    );
}