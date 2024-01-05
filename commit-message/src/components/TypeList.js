import React from 'react'
import { useSelector} from "react-redux";
import { typeList} from "../database/data"
import { useDispatch } from 'react-redux';
import { setType } from "../redux/actions/Message"
export default function TypeList() {
    const dispatch = useDispatch();
    const selectedType = useSelector(state => state.Message.type);

    const onClickType = (name) =>{
        dispatch(setType(name));
    };

    return(
        <div className='middle-wrap'>
            <div>
            {typeList.map((item) => (
                    item.name.includes(selectedType)  && (
                    <dl className="type-box" key={item.name} onClick={()=>{onClickType(item.name)}}>
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