import { useState } from 'react';
import './style.css';
import { InputRecord } from './components/InputRecord';
import { RecordList } from './components/RecordList';
import { PrintError } from './components/PrintError';

export const App = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputTime, setInputTime] = useState(0);

  const [records, setRecords] = useState([]);

  const [totalTime, setTotalTime] = useState(0);

  const [isSpace, setIsSpace] = useState(false);

  const isNumber = typeof inputTime === 'number';

  const onChangeInputTitle = (event) => {
    setInputTitle(event.target.value);
  };
  const onChangeInputTime = (event) => {
    const value = event.target.value;
    setInputTime(value === '' ? '' : parseFloat(value));
  };

  const onClickResister = () => {
    const isSpace = inputTitle === '' || inputTime === 0;
    setIsSpace(isSpace);
    if (isSpace) return;
    const newRecord = [inputTitle, inputTime];
    const newRecords = [...records, newRecord];
    setRecords(newRecords);
    setInputTitle('');
    setInputTime(0);
    sumTime();
  };

  const sumTime = () => {
    setTotalTime(totalTime + inputTime);
  };

  return (
    <>
      <InputRecord
        title={inputTitle}
        time={inputTime}
        onChangeTitle={onChangeInputTitle}
        onChangeTime={onChangeInputTime}
      />
      <RecordList records={records} />
      <button onClick={onClickResister}>登録</button>
      <PrintError condition={isSpace} />

      <p>合計時間: {totalTime}</p>
    </>
  );
};
