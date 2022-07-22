import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../firstPage/Fpage.css';
import { AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"
import './register.css';

const RegCom2 = () => {

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

  const [color,setColor] = useState(true);
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const [name,setName] = useState('');
  const [bStyle,setBstlye] = useState();
  const [isOpen,setMenu]= useState(false);
  const [pisOpen,setPmenu] = useState(false);

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
    if(isOpen === true && pisOpen === true){
      setPmenu(false);
    }
  }
  const tgMenuProp = () => {
    setPmenu(pisOpen => !pisOpen); 
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

  const onChange1 = (e)=>{
    setId(e.target.value);
  }
  const onChange2 = (e)=>{
    setPw(e.target.value);
  }
  const onChange3 = (e) => {
    setName(e.target.value);
  }
  const onClick = () => {
    setId('');
    setPw('');
    setName('');
  }
  return (
    <>
      <div style={bStyle}>
        <Link to='/'><button className='mib'></button></Link>
        <div className='menu'>
          <button onClick={()=>toggleMenu()} style={bStyle} className='menubutton'><AiOutlineMenu /></button>
          <Link to='/search'><button style={bStyle} className='menubutton'><AiOutlineSearch /></button></Link>
          <button onClick={toggleColor} style={bStyle} className='light'>{color === true ? <BsFillMoonFill /> : <BsFillSunFill/>}</button>    
        </div>
        <div className={isOpen ? "show-menu" : "hide-menu"}>
            <button onClick={()=>{tgMenuProp();}} className='menusidebutton-h'>Models</button>
            <button onClick={toggleMenu} className='Xbutton'>X</button><br />
            <Link to='/calender'><button className={pisOpen ? "menusidebutton-o" : "menusidebutton-h"}>Notes</button></Link><br />
            <button onClick={()=>window.open('https://github.com/SSKyun')} className='menusidebutton-h'>Github</button><br />
            <Link to='/login'><button className='msloginbutton'>Login</button></Link>
            <Link to='/register'><button className='msloginbutton'>Sign up</button></Link><br />
        </div>
          <div className={pisOpen ? "pshow-menu" : "phide-menu"}>
            <button className='pmbutton hover1' >AVENTADOR</button><br />
            <button className='pmbutton hover2' >URUS</button><br />
            <button className='pmbutton hover3' >HURACAN</button>
          </div>
          <div className='GuiChan'>
            <div>회원 가입</div><br />
            <input onChange={onChange1} value={id} placeholder='ID'/><br />
            <input onChange={onChange2} value={pw} placeholder='PW'/><br />
            <input onChange={onChange3} value={name} placeholder='Name' /><br />
            <button onClick={onClick}>확인</button>
          </div>
          <div className='lastmenu-regi'>
            © 2022 DevSungsters Corp. All Rights Reserved.
          </div>
      </div>
    </>
  );
};

export default RegCom2;