import React, { useState, useCallback } from 'react';
import { MdAdd,MdGrade } from 'react-icons/md';
import './TodoInsert.scss';

/* export function fun3(){
  console.log(`f3 call`);
}
 */
const TodoInsert = ({ onInsert }) => {
  const [inputVal,setInputVal] = useState('');

  const onChange = useCallback((e) => {
    setInputVal(e.target.value);
  }, []);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    onInsert(inputVal)
    setInputVal('');
  },
  [onInsert, inputVal]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={inputVal}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;