import { useState } from 'react';

const Main = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassoword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmedPasswordError, setConfirmedPasswordError] = useState('');

  const [usernameColor, setUsernameColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmedPasswordColor, setConfirmedPasswordColor] = useState('');

  const validate = () => {
    if (username.length >= 8) {
      setUsernameError('');
      setUsernameColor('#087517');
    } else {
      setUsernameError('Username must be 8 letters long.');
      setUsernameColor('#ed2424');
    }

    const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailValidator.test((email).toLowerCase())) {
      setEmailError('');
      setEmailColor('#087517');
    } else {
      setEmailError('Invalid email address');
      setEmailColor('#ed2424');
    }
    const passwordValidator = /\d/g;
    if (password.length >= 8 && passwordValidator.test(password)) {
      setPasswordError('');
      setPasswordColor('#087517');
    } else {
      setPasswordError('Password must be 8 characters long and contain digits.');
      setPasswordColor('#ed2424');
    }


    if (password !== '' && password === confirmedPassword) {
      setConfirmedPasswordError('');
      setConfirmedPasswordColor('#087517');
    } else {
      setConfirmedPasswordError('Passwords must match and not be empty.');
      setConfirmedPasswordColor('#ed2424');
    }
  };

  return (
    <div>
      <div className='row justify-content-center w-100'>
        <div className='col-md-5 shadow p-3 mb-5 bg-white rounded'>
          <h1>Form validation</h1>
          <input
            className='form-control'
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
            style={{
              borderColor: usernameColor
            }}
            type='text'
            value={username}
          />
          <p>{usernameError}</p>
          <input
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email'
            style={{
              borderColor: emailColor
            }}
            type='text'
            value={email}
          />
          <p>{emailError}</p>
          <input
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            style={{
              borderColor: passwordColor
            }}
            type='text'
            value={password}
          />
          <p>{passwordError}</p>
          <input
            className='form-control'
            onChange={(e) => setConfirmedPassoword(e.target.value)}
            placeholder='confirm password'
            style={{
              borderColor: confirmedPasswordColor
            }}
            type='text'
            value={confirmedPassword}
          />
          <p>{confirmedPasswordError}</p>
          <button
            className='btn btn-primary'
            onClick={validate}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
