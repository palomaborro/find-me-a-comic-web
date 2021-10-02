import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import './Login.css'

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: ''
  });
  const [error, setError] = useState();

  const { replace } = useHistory();

  const onChange = (event) => {
    setUser((oldValue) => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
  };

  const doRegister = (event) => {
    event.preventDefault();

  }

  return (
    <div className="SignUp">
      <form onSubmit={doRegister}>
      {error && 
        <p>There was an error: {error}</p>}
        <label htmlFor="email">Email:</label>
        <input
          className='SignUp__email'
          placeholder='freelancehunter@gmail.com'
          name="email"
          id="email"
          value={user.email}
          onChange={onChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          className='SignUp__password'
          placeholder='lyingcat39'
          name="password"
          id="password"
          type='password'
          value={user.password}
          onChange={onChange}
        />

        <label htmlFor="Name">Name:</label>
        <input
          className='SignUp__name'
          placeholder='Billy'
          name="name"
          id="name"
          type='name'
          value={user.name}
          onChange={onChange}
        />

        <label htmlFor="Image">Image:</label>
        <input
          className='SignUp__image'
          name="image"
          id="image"
          type='image'
          value={user.image}
          onChange={onChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
