import { useLocalStorage } from 'hooks/useLocalStorage';
import React from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <form autoComplete="off" className="">
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUpForm;
