import React from 'react';

const LoginPage = (props) => (
  <div>
  <form onSubmit={(e) => {
    e.preventDefault();
    props.history.push('/dashboard');
  }}>
    <input type="text" 
          placeholder="id" 
          autoFocus />
    <input type="text" 
          placeholder="password" />
    <button>Login</button>
  </form>
  </div>
);

export default LoginPage;