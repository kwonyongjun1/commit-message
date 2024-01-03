import React from 'react';
import {useSelector} from "react-redux";
import {STATE} from "../constants";
import EmojiList from "./EmojiList";
import TypeList from "./TypeList";
export default function ContentsList() {

    const state = useSelector(state => state.Message.currentState);

    return(
        <div>
           { state === STATE.EMOJI_MODE && <EmojiList/>}
           { state === STATE.TYPE_MODE && <TypeList/> }
        </div>
    );
}