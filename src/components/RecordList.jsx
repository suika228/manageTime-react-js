export const RecordList = (props) => {
  const { records } = props;
  console.log(records);
  return (
    <>
      {records.map((record) => (
        <div key={record.id}>
          <p>学習内容: {record[0]}</p>
          <p>学習時間: {record[1]}</p>
        </div>
      ))}
    </>
  );
};
