/* 컴포넌트에 데이터 전달하기 2 (props) */
export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: true | false;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  return (
    <>
      <p>number: {props.numberValue}</p>
      <p>string: {props.stringValue}</p>
      <p>boolean: {props.booleanValue.toString()}</p>
      <p>array: {props.arrayValue}</p>
      <p>object: {JSON.stringify(props.objectValue)}</p>
      <p>function: {props.handleClick.toString()}</p>
    </>
  );
}
