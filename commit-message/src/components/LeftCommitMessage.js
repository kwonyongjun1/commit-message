import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setAutoMode } from "../redux/actions/Message"
export default function Message() {

    const dispatch = useDispatch();
    const autoMode = useSelector(state => state.autoMode);
    
    const [scope, setScope] = useState();
    const [body, setBody] = useState();
    const [footer, setFooter] = useState();

    const onClickToggleAuto = () => {
        dispatch(setAutoMode(!autoMode));
        console.log(autoMode);
    };

    const onChangeType = (event) => {
    };

    const onChangeScope = (event) => {
        setScope(event.target.value);
    };

    const onChangeBody = (event) => {
        setBody(event.target.value);
    };

    const onChangeFooter = (event) => {
        setFooter(event.target.value);
    };

    

    // todo
    const copyMessage = () => {
        console.log(scope);
        console.log(body);
        console.log(footer);
    };

    return(
        <div>
           <article>
                <button onClick={onClickToggleAuto}>{autoMode}</button>
                <header>
                    <button id="emoji">emoji</button>
                    <input type="text" id="type" placeholder="type" onChange={onChangeType}/>
                    :
                    <input type="text" id="scope" placeholder="scope" onChange={onChangeScope}/>
                </header>    
                
                <textarea id="body" placeholder="body" onChange={onChangeBody}>
                </textarea>

                <textarea id="footer" placeholder="footer" onChange={onChangeFooter}>
                </textarea>
           </article>

           <button onClick={copyMessage}>저장</button>
        </div>
    );
}