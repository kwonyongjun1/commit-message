import React from 'react'
import { useSelector} from "react-redux";
import { typeList} from "../database/data"
export default function TypeList() {
    const selectedType = useSelector(state => state.Message.type);

    return(
        <div className='middle-wrap'>
            <div>
            {typeList.map((item) => (
                    item.name.includes(selectedType)  && (
                    <dl className="type-box" key={item.name}>
                        <dt>
                            {item.name}
                        </dt>
                        <dd>
                            {item.description}
                        </dd>
                    </dl>
                    ) 
                ))}
            </div>
        </div>
    );
}