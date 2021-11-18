import React, { useState } from 'react';

const LoginForm = (props) => {
  const usernameRegEx = /^[0-9]{7}$/;

  const [formData, setFormData] = useState({
    username: 'default',
    password: 'default',
  });

  const [formValidation, setFormValidation] = useState({
    username: null,
    password: null,
  });

  const [isTouched, setIsTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isTouched || formValidation.username) {
      console.log('Invalid form, cannot submit');
    } else {
      console.log(formData);
    }
  };

  const changeHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setIsTouched(true);

    if (field === 'username') {
      if (!usernameRegEx.test(value)) {
        setFormValidation((data) => {
          return {
            ...data,
            username: 'must be an email',
          };
        });
      } else {
        setFormValidation((data) => {
          return {
            username: '',
            password: '',
          };
        });
      }

      setFormData((data) => {
        return {
          ...data,
          username: e.target.value,
        };
      });
    }
  };

  return (
    <>
      <h3>Login Form</h3>
      <form
        noValidate
        autoComplete='off'
        className='my-4'
        onSubmit={handleSubmit}
      >
        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            className='form-control'
            name='username'
            onChange={changeHandler}
            value={formData.username}
          />
          {isTouched && formValidation.username ? (
            <p className='text-danger'>{formValidation.username}</p>
          ) : null}
        </div>
        <div className='form-group my-4'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            onChange={changeHandler}
            value={formData.password}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
