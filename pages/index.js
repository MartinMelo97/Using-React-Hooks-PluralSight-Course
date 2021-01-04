import React, { useState } from 'react';

const InputElement = () => {

  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  const handleInputText = (event) => {
    setInputText(event.target.value);
    addItemToHistoryList(event);
  };

  const addItemToHistoryList = (event) => {
    setHistoryList([...historyList, event.target.value]);
  };

  return (
    <div>
      <input
        onChange={handleInputText}
        placeholder="Enter some text"
      />
      <br />
      <p>Current value: {inputText}</p>
      <hr />
      {historyList.map(historyItem => (
        <p>{historyItem}</p>
      ))}
    </div>
  );
};

export default InputElement;