import React, {useState} from 'react'
import { typeList, emojiList} from '../services/data'
export default function ResultList() {
    const [list, setList] = useState(typeList);
    
    const filter = () =>{

        for(let i in typeList){
            
        }
        
    };

    return(
        <div>
           Slide 컴포넌트
           {list.map((item, index) => (
                <div key={index}>
                    {item.name}
                    :
                    {item.description}
                </div>
            ))}
        </div>
    );
}