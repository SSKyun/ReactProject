import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"
import { AiOutlineSearch,AiOutlineMenu } from "react-icons/ai";
import '../App.css';
import './login.css'

const Login = () => {
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

 const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
  };

  const [color,setColor] = useState(true);
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
  const handleScroll = (e) => {
    if(!window.scrollY) return;
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  };

  //확인 되면 Link x면 alert
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
        <div className='wrapper'>
          <div className='lb-wrap'>
            <div className='lb-text'>
              <div classname='lgbenur'>로그인</div>
              <input className='inputstyle' placeholder='ID'/><br />
              <input className='inputstyle' placeholder='PW'/><br />
              <button className='buttonstyle'>확인</button>
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