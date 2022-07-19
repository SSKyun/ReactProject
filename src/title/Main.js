import React from 'react';
import './Main.css';
import {Link} from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div>
        <div className='regi'>
          <Link to="./register">
            <button>
              Register
            </button>
          </Link>
        </div>
        <div className='login'>
          <Link to="./login">
            <button>
              Login
            </button>
          </Link>
        </div>
        
        <h1>Sung</h1>
        <h2>Menu
          <Link to="./calender"><button className='menubar'>Notes</button></Link>
        </h2>
      </div>
    </>
  );
};

export default Main;