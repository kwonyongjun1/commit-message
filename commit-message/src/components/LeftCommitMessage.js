import React, {useState} from 'react'

// reducer 형태 
// {
//     autoMode : true,
//     emoji : "Feat",
//     type : ""
// }

export default function Message() {
    const [auto, setAuto] = useState(true);
    const [emoji, setEmoji] = useState("✨")
    const [type, setType] = useState();
    const [scope, setScope] = useState();
    const [body, setBody] = useState();
    const [footer, setFooter] = useState();

    const onChangeType = (event) => {
        setType(event.target.value);
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

    const onClickToggleAuto = () => {
        setAuto(!auto);
    };

    // todo
    const copyMessage = () => {
        console.log(type);
        console.log(scope);
        console.log(body);
        console.log(footer);
    };

    return(
        <div>
           <article>
                <button onClick={onClickToggleAuto}>auto</button>
                <header>
                    <button id="emoji">{emoji}</button>
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