import React from 'react';
import { IconName,ImPacman } from "react-icons/im";
import { Link } from 'react-router-dom';
import './Fpage.css';

const Fpage = () => {
  return (
    <>
      <div className='wrapper'>
        <Link to="./main">
          <button>
            <ImPacman />Go !
          </button>
        </Link>
      </div>    
    </>
  );
};

export default Fpage;