import { useState } from "react";
import { useHistory } from "react-router";
import { createUser } from "../../services/UserService";
import './SignUp.css'

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: ''
  });
  const [error, setError] = useState();

  const { replace } = useHistory();

  const onChange = (event) => {
    setUser((oldValue) => {
      const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;
      return {
      ...oldValue,
      [event.target.name]: value
    }});
  };

  const doRegister = (event) => {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(user).forEach((key) => {
      formData.append(key, user[key])
    });

    createUser(formData)
    .then(() => {
      replace('/login')
    })
    .catch((error) => setError(error.response.data.message))
  }

  return (
    // <div className='Signup__Background'>
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
          type='file'
          alt=''
          onChange={onChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
    // </div>
  );
}
