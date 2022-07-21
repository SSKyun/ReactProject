import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import { AiOutlineSearch} from "react-icons/ai";

const Search = () => {
  const [sch,setSch] = useState('');
  const google = 'http://www.google.com/search?q=';

  const onKeyPress = e => {
    if(e.key === 'Enter'){
      onClick();
    }
  }
  const onChange = (e) => {
    setSch(e.target.value);
  }
  const onClick = () => {
    window.open(google+sch);
  }

  return (
    <>
      <div className='Exe'>
      <Link to='/'><button className='Exebutton'>X</button></Link>
      </div>
      <div className='wrapper'>
        <div className='sStyle'>
            <input onKeyPress={onKeyPress} onChange={onChange} className='ipStyle' placeholder='입력' />
            <button onClick={onClick} className='icStyle' ><AiOutlineSearch  /></button>
        </div>
      </div>
    </>
  );
};

export default Search;