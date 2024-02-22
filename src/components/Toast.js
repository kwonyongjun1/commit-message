import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToastMessage } from '../redux/actions/Toast';

export default function Toast() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [timer, setTimer] = useState();

  const toastMessage = useSelector((state) => state.Toast.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toastMessage) {
      setMessage(toastMessage);
      dispatch(setToastMessage(''));
      setShow(true);

      if (!!timer) {
        clearTimeout(timer);
      }

      setTimer(
        setTimeout(() => {
          setShow(false);
          setTimer(null);
        }, 3000)
      );
    }
  }, [toastMessage]);

  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <div className="toast-content">
        <span className="toast-text">{message}</span>
      </div>
    </div>
  );
}
