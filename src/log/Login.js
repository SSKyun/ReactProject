import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"
import { AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";
import '../App.css';
import './login.css'

const Login = () => {
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const [arr,setArr] = useState([]);

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
  const [bStyle,setBstlye] = useState();
  const [isOpen,setMenu]= useState(false);

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
  const handleScroll = (e) => {
    if(!window.scrollY) return;
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  };
  const onChange1 = (e)=>{
    setId(e.target.value);
  }
  const onChange2 = (e)=>{
    setPw(e.target.value);
  }

  const onClick = () => {
    setArr("ID : "+ id+" PW : "+pw);
    setId('');
    setPw('');

  }
  const ArrList = () => {
    arr.map((arr,idx)=>{
      return(<li key = {idx}>{arr}</li>)
    });
  }
  //확인 되면 Link x면 alert
  return (
    <>
      <div style={bStyle}>
      <Link to='/'><button className='mib'><img src='https://o.remove.bg/downloads/a60c1d9a-f17c-4b4a-89dc-d15af8bd1809/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C-removebg-preview.png' alt=''/></button></Link>
        <div className='menu'>
          <button onClick={()=>toggleMenu()} style={bStyle} className='menubutton'><AiOutlineMenu /></button>
          <Link to='/search'><button onClick={''} style={bStyle} className='menubutton'><AiOutlineSearch /></button></Link>
          <button onClick={toggleColor} style={bStyle} className='light'>{color === true ? <BsFillMoonFill /> : <BsFillSunFill/>}</button>    
        </div>
        <div className={isOpen ? "show-menu" : "hide-menu"}>
            <button style={bStyle} className='menusidebutton'>Category</button><br />
            <Link to='/calender'><button style={bStyle} className='menusidebutton'>Notes</button></Link><br />
            <button style={bStyle} onClick={()=>window.open('https://github.com/SSKyun')} className='menusidebutton'>Github</button><br />
            <Link to='/login'><button style={bStyle} className='msloginbutton'>Login</button></Link>
            <Link to='/register'><button style={bStyle} className='msloginbutton'>Sign up</button></Link><br />
        </div>
        <div className='wrapper'>
          <div className='lb-wrap'>
            <div className='lb-text'>
              <div classname='lgbenur'>로그인</div>
              <input className='inputstyle' onChange={onChange1} value={id} placeholder='ID'/><br />
              <input className='inputstyle' onChange={onChange2} value={pw} placeholder='PW'/><br />
              <button className='buttonstyle' onClick={onClick}>확인</button>
            </div>
            <div className='lb-image'>
              <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrNysrNy03Ny0tLSs3KzcrKystLSsrKy0tLSs3Ky0rLS0rKysrLSstNystKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAgADBgf/xAAbEAEBAQEAAwEAAAAAAAAAAAAAAQIREjFRIf/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/APQMWe54QFDiQ4OK43EcDK4ZlHEcbi+NxHEeLeLpxuIomTMr4ZBqwSOmY0jpjLFrchzHfM4jK8xzrty6ZdcueY7ZcunXl0y65c8uuXKu0dI65c46Zc66RcVExcZJikxSRhgVEyxYmMtFQFClmYh8+bhZ9Z8kcYsiGKswFMyqm/BwaRxuK43EcHG4rh4kmRUh4ZAWkdMJkdMxmtxUdMxGY65jnXWLzHXMc8x1y5105dMuuXPLrHKusXl0yjK8sV0i4uIjpGWjDGMAJgJZJEKBIhhBZmQeAZm4+q+UzHh4NI4x4URw8YhpuMeGRIcPDIqQacTIZDwjTjSOmYnMXIK3FZjpmJzHSRzrcXl0yjLplzrpHTLrlGY6RzrpFR0yiLyxXSLi4iLgJVEqgRMaGIFmYgwiKTNYsxTwHDxlSPpPlhjYyIJbiaY8MhGnBISZARFem5xkQZDIoHGkXBIuQVqHMdInMdJGK3FZdcoyuOddI6ZdIjK4xW4uOkRlcYrcXFRMVGSqGCKiWkxmQLMUiQSyxDIPCSHvxqz6T5oPGKaxi0hZajQsUWMjSK4COHjGRFjIZDIEZFSCRcjNaVmLgkVmM1qLyuJy6RitxeVxGXSMV0isukRleWGoqLiYsFlQGBEsyRMBhBaCFMkhinhWLPoPnE8EIaYsqRNDipDxgcZjIZAWkPDw8WkSKjSGQIyLzBJxcBK8xMXGK1FR0iI6RmtxWVxOVxhuKi4mLyy1FwiKBMMEVAizFBjAUC0EMKLMyDwxjF73gYsYmmkXPxgGoTI0ipBpaQyNCCx4SiJFRpDAjFwSKgJzFwZi4y1FRcRHSMVuKi4mKjJXlUTFxlpUVExQJiokpKIZAkFBoWYoszIPEFi9rxxjGhRZUjSKkZaaQsZESWMBYnhkCEipDIUWioJFyMlUioJFQFUXEyLjNbioqCKgJi4mKjNKopMUCYYIqIFmhSYiE4NJDJFmZJ4lUPGex5GVIIqMmNFRoYmmimhgLSKkMhBYyMRqYxpFSAtIuQSKkRMXBFRkwxcTIqClUXExUDSoqJioEqERQWmEGBEiMkSCQ0MZoUWZkni1QRUep5pDC0MDUMMaGQEyKkaQgtDGVIE0ipGkMgONIqRpFSAtFRpDETFQSKBMXExcZJioIqJGKiYqJKIhCMIhSJgKRZmQJBSZmZJ42Kgio9LgYqCGBoxUaQgmGRpFSMlpFSNIZEWipGkMgJkMhkIWMqCRUg0tFSNIqJGRUEVATFQQxIxUEMSJaFAxgUtJDIaqMGS0tKzJKYMlryEVGZ6HJUXIzMkmRmDUXIYWZJipGYFUMZkVSKjMCYqMwSoYWSMVGZJUMZkDFRmSJDJEwMgpmZAszJFmZIszJP/Z' alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;