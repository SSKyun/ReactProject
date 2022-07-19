import React, { useState } from 'react';
import '../App.css';

const Login = () => {
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');

  const [arr,setArr] = useState([]);

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
  return (
    <>
      <div className='wrapper'>
        <div className='lb-wrap'>
          <div className='lb-text'>
            <div>로그인</div>
            <input onChange={onChange1} value={id} placeholder='ID'/><br />
            <input onChange={onChange2} value={pw} placeholder='PW'/><br />
            <button onClick={onClick}>확인</button>
          </div>
          <div className='lb-image'>
            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrNysrNy03Ny0tLSs3KzcrKystLSsrKy0tLSs3Ky0rLS0rKysrLSstNystKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAgADBgf/xAAbEAEBAQEAAwEAAAAAAAAAAAAAAQIREjFRIf/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/APQMWe54QFDiQ4OK43EcDK4ZlHEcbi+NxHEeLeLpxuIomTMr4ZBqwSOmY0jpjLFrchzHfM4jK8xzrty6ZdcueY7ZcunXl0y65c8uuXKu0dI65c46Zc66RcVExcZJikxSRhgVEyxYmMtFQFClmYh8+bhZ9Z8kcYsiGKswFMyqm/BwaRxuK43EcHG4rh4kmRUh4ZAWkdMJkdMxmtxUdMxGY65jnXWLzHXMc8x1y5105dMuuXPLrHKusXl0yjK8sV0i4uIjpGWjDGMAJgJZJEKBIhhBZmQeAZm4+q+UzHh4NI4x4URw8YhpuMeGRIcPDIqQacTIZDwjTjSOmYnMXIK3FZjpmJzHSRzrcXl0yjLplzrpHTLrlGY6RzrpFR0yiLyxXSLi4iLgJVEqgRMaGIFmYgwiKTNYsxTwHDxlSPpPlhjYyIJbiaY8MhGnBISZARFem5xkQZDIoHGkXBIuQVqHMdInMdJGK3FZdcoyuOddI6ZdIjK4xW4uOkRlcYrcXFRMVGSqGCKiWkxmQLMUiQSyxDIPCSHvxqz6T5oPGKaxi0hZajQsUWMjSK4COHjGRFjIZDIEZFSCRcjNaVmLgkVmM1qLyuJy6RitxeVxGXSMV0isukRleWGoqLiYsFlQGBEsyRMBhBaCFMkhinhWLPoPnE8EIaYsqRNDipDxgcZjIZAWkPDw8WkSKjSGQIyLzBJxcBK8xMXGK1FR0iI6RmtxWVxOVxhuKi4mLyy1FwiKBMMEVAizFBjAUC0EMKLMyDwxjF73gYsYmmkXPxgGoTI0ipBpaQyNCCx4SiJFRpDAjFwSKgJzFwZi4y1FRcRHSMVuKi4mKjJXlUTFxlpUVExQJiokpKIZAkFBoWYoszIPEFi9rxxjGhRZUjSKkZaaQsZESWMBYnhkCEipDIUWioJFyMlUioJFQFUXEyLjNbioqCKgJi4mKjNKopMUCYYIqIFmhSYiE4NJDJFmZJ4lUPGex5GVIIqMmNFRoYmmimhgLSKkMhBYyMRqYxpFSAtIuQSKkRMXBFRkwxcTIqClUXExUDSoqJioEqERQWmEGBEiMkSCQ0MZoUWZkni1QRUep5pDC0MDUMMaGQEyKkaQgtDGVIE0ipGkMgONIqRpFSAtFRpDETFQSKBMXExcZJioIqJGKiYqJKIhCMIhSJgKRZmQJBSZmZJ42Kgio9LgYqCGBoxUaQgmGRpFSMlpFSNIZEWipGkMgJkMhkIWMqCRUg0tFSNIqJGRUEVATFQQxIxUEMSJaFAxgUtJDIaqMGS0tKzJKYMlryEVGZ6HJUXIzMkmRmDUXIYWZJipGYFUMZkVSKjMCYqMwSoYWSMVGZJUMZkDFRmSJDJEwMgpmZAszJFmZIszJP/Z' alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;