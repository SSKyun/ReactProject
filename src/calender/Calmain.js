import React ,{ useState, useRef, useCallback } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import '../App.css';
import { Link } from 'react-router-dom';
import { AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";
import fpage from '../firstPage/Fpage.css';
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"


const createTodoDatas = () => {
  const arr =[];
  for(let i=1;i<= 0;i++){
    arr.push(
      {id:i,text:`리액트 할일 예제 ${i}`, checked:false},
    );
  }
  return arr;
}

const Calmain = () => {
  const [todos, setTodos] = useState(createTodoDatas);
  const [color,setColor] = useState(true);
  const [bStyle,setBstlye] = useState();
  const [isOpen,setMenu]= useState(false);

   const listyle = {
    backgroundColor : 'mintcream',
    color: '#31302e',
    border : '0px',
    fontSize : '17px',
  }
  const dkstyle = {
    backgroundColor : '#1e1e22',
    color: '#ccc',
    border : '0px',
    fontSize : '17px',
  }
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  }

  const toggleColor = () => {
    if(color === true){
      setColor(false);
      setBstlye(dkstyle);
      console.log(color)
    }
    else {
      setColor(true);
      setBstlye(listyle);
      console.log(color)
    }
  }
  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(2501);
  // 상태의 값 유지 : 불변성
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1 씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <>
      <div style={bStyle}>
      <Link to='/'><button className='mib'><img src='https://o.remove.bg/downloads/1ca912a2-f1a2-4164-82e5-7a15a19d51a1/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C-removebg-preview.png' alt=''/></button></Link>
        <div className='menu'>
          <button onClick={()=>toggleMenu()} style={bStyle} className='menubutton'><AiOutlineMenu /></button>
          <Link to='/search'><button onClick={''} style={bStyle} className='menubutton'><AiOutlineSearch /></button></Link>
          <button onClick={toggleColor} style={bStyle} className='light'>{color === true ? <BsFillMoonFill /> : <BsFillSunFill/>}</button>    
        </div>
        <div className={isOpen ? "show-menu" : "hide-menu"}>
            <button style={bStyle} className='menusidebutton'>2</button><br />
            <Link to='/calender'><button style={bStyle} className='menusidebutton'>Notes</button></Link><br />
            <button style={bStyle} className='menusidebutton'>4</button><br />
            <Link to='/login'><button style={bStyle} className='msloginbutton'>Login</button></Link>
            <Link to='/register'><button style={bStyle} className='msloginbutton'>Sign up</button></Link><br />
        </div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
      </div>
    </>
  );
};

export default Calmain;