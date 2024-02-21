import React from 'react';
import { useSelector } from 'react-redux';
import { typeList } from '../database/data';
import { useDispatch } from 'react-redux';
import { setType, setEmoji } from '../redux/actions/Message';
import { findEmojiFromRelType } from '../utils';
export default function TypeList() {
    const dispatch = useDispatch();
    // const selectedType = useSelector(state => state.Message.type);
    const autoMode = useSelector((state) => state.Message.autoMode);

    const onClickType = (type) => {
        dispatch(setType(type.name));
        if (autoMode) {
            let emoji = findEmojiFromRelType(type.name);
            if (emoji.emoji) {
                dispatch(setEmoji(emoji.emoji));
            }
        }
    };

    return (
        <div className="middle-wrap">
            <div>
                {typeList.map((type) => (
                    <dl
                        className="type-box"
                        key={type.name}
                        onClick={() => {
                            onClickType(type);
                        }}
                    >
                        <dt>{type.name}</dt>
                        <dd>{type.description}</dd>
                    </dl>
                ))}
            </div>
        </div>
    );
}
