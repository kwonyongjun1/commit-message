import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setAutoMode,
  setType,
  setCurrentState,
  setEmoji,
  setShortSummary,
  setScope,
  setBody,
  setFooter
} from '../redux/actions/Message';
import { STATE } from '../constants';
import { findEmojiFromRelType, copyMessage } from '../utils';
import Form from 'react-bootstrap/Form';

export default function Message() {
  const dispatch = useDispatch();
  const autoMode = useSelector((state) => state.Message.autoMode);
  const emoji = useSelector((state) => state.Message.emoji);
  const type = useSelector((state) => state.Message.type);
  const shortSummary = useSelector((state) => state.Message.shortSummary);
  const scope = useSelector((state) => state.Message.scope);
  const body = useSelector((state) => state.Message.body);
  const footer = useSelector((state) => state.Message.footer);

  const onClickToggleAuto = () => {
    dispatch(setAutoMode(!autoMode));
  };

  const onClickEmoji = () => {
    dispatch(setCurrentState(STATE.EMOJI_MODE));
  };

  const onChangeType = (event) => {
    dispatch(setType(event.target.value));
    if (autoMode) {
      let emoji = findEmojiFromRelType(event.target.value);
      if (emoji) {
        dispatch(setEmoji(emoji.emoji));
      }
    }
  };

  const onClickType = () => {
    dispatch(setCurrentState(STATE.TYPE_MODE));
  };

  const onChangeScope = (event) => {
    dispatch(setScope(event.target.value));
  };

  const onChangeShortSummary = (event) => {
    dispatch(setShortSummary(event.target.value));
  };

  const onChangeBody = (event) => {
    dispatch(setBody(event.target.value));
  };

  const onChangeFooter = (event) => {
    dispatch(setFooter(event.target.value));
  };

  const onClickCopy = () => {
    copy();
  };

  const onClickClear = () => {
    clearMessage();
  };

  const onClickHistory = () => {
    dispatch(setCurrentState(STATE.HISTROY_MODE));
  };

  const copy = () => {
    if (!!emoji && !!type && !!shortSummary) {
      const message = {
        emoji: emoji,
        type: type,
        scope: scope,
        shortSummary: shortSummary,
        body: body,
        footer: footer
      };
      try {
        copyMessage({ ...message });
        saveLocal(message);
        return alert('저장이 완료되었습니다.');
      } catch (error) {
        alert('저장이 실패되었습니다.');
      }
    } else {
      return alert('커밋 메시지를 작성해주세요');
    }
  };

  const saveLocal = (message) => {
    let preMessage = !!localStorage.getItem('preMessage')
      ? JSON.parse(localStorage.getItem('preMessage'))
      : [];
    message.id = getId();
    preMessage.push(message);
    localStorage.setItem('preMessage', JSON.stringify(preMessage));
  };

  const getId = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const Milliseconds = currentDate.getMilliseconds();
    return `${year}${month}${day}${hours}${minutes}${seconds}${Milliseconds}`;
  };

  const clearMessage = () => {
    dispatch(setEmoji(''));
    dispatch(setType(''));
    dispatch(setScope(''));
    dispatch(setShortSummary(''));
    dispatch(setBody(''));
    dispatch(setFooter(''));
  };

  return (
    <section className="left-wrap">
      <header>
        <span onClick={getId}>Commit-Message</span>
      </header>
      <div className="setting-area">
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="EmojiAuto"
            onClick={onClickToggleAuto}
          />
        </Form>
      </div>
      <article className="commit-message">
        <header>
          <button className="emoji" onClick={onClickEmoji}>
            {emoji}
          </button>
          <input
            type="text"
            className="type"
            placeholder="type"
            value={type}
            onClick={onClickType}
            onChange={onChangeType}
          />
          <input
            type="text"
            className="scope"
            placeholder="scope"
            value={scope}
            onChange={onChangeScope}
          />
          :
          <input
            type="text"
            className="shortSummary"
            placeholder="make log easier (#123)"
            value={shortSummary}
            onChange={onChangeShortSummary}
          />
        </header>
        <div className="body">
          <textarea
            className="commitBody"
            placeholder="body"
            value={body}
            onChange={onChangeBody}
          ></textarea>
          <textarea
            className="commitFooter"
            placeholder="footer"
            value={footer}
            onChange={onChangeFooter}
          ></textarea>
        </div>
        <div className="footer">
          <button onClick={onClickCopy}>copy</button>
          <button onClick={onClickClear}>clear</button>
          <button onClick={onClickHistory}>history</button>
        </div>
      </article>
    </section>
  );
}
