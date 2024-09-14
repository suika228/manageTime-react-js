export const InputRecord = (props) => {
  const { title, time, onChangeTitle, onChangeTime } = props;
  return (
    <div>
      <label>学習内容</label>
      <input value={title} onChange={onChangeTitle} />
      <br />
      <label>学習時間</label>
      <input type="number" value={time} onChange={onChangeTime} />
      <label>時間</label>
    </div>
  );
};
