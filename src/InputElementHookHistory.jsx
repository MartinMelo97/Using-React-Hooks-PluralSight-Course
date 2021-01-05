import { useState } from 'react';

const InputElementHookHistory = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        onChange={e => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder='Enter some text'
      />
      <br/>
      {inputText}
      <hr/>
      <br/>
      <ul>
        {historyList.map(rec => (
          <li>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputElementHookHistory;