import React from 'react';

const Login = () => {
    return (
      <>
        <form>
          <div>
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' placeholder='Username'/>
          </div>
          <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' placeholder='Password'/>
          </div>
        </form>
      </>
    )
  }

export default Login