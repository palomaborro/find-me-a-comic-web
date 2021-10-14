import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import './Login.css'

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { login } = useAuth();
  const { replace } = useHistory();

  const onChange = (event) => {
    setCredentials((oldValue) => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
  };

  const doLogin = (event) => {
    event.preventDefault();
    login(credentials.email, credentials.password)
    .then(() => {
        replace('/new')
    })
    .catch((event) => setError(event?.response?.data?.message))
  }

  return (
    // <div className='Background'>
    <div className="Login">
      <form onSubmit={doLogin}>
      {error && 
        <p>There was an error: {error}</p>}
        <label htmlFor="email">Email:</label>
        <input
          className='Login__email'
          name="email"
          id="email"
          value={credentials.email}
          onChange={onChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          className='Login__password'
          name="password"
          id="password"
          type='password'
          value={credentials.password}
          onChange={onChange}
        />

        <button type="submit">Login</button>
        <br />
      <Link className='Login__signup' to='/signup'>Or sign up here</Link>
      </form>
    </div>
    // </div>
  );
}
