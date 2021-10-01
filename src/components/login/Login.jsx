import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";

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
    .catch((event) => setError(event.response.data.message))
  }

  return (
    <div className="Login">
        {error && 
        <p>There was an error: {error}</p>} 

      <form onSubmit={doLogin}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          value={credentials.email}
          onChange={onChange}
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          value={credentials.password}
          onChange={onChange}
        />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
