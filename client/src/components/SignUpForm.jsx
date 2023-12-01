import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import axios from 'axios';

function SignUpForm({ handleLogin, setUsername }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsernameLocal] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkUsername = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/check-username/${username}`);
        const usernameExists = response.data.usernameExists;
        setUserExists(usernameExists);
        if (!usernameExists) {
          console.log(username)
          setUsername(username)
        }
      } catch (error) {
        console.error("Error checking username:", error);
      }
    }

    if (username) {
      checkUsername();
    }
  }, [username])

  // Called when the button with type="submit" inside the form is pressed
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userExists) {
      console.error("Username already exists. Please choose a different one.");
      return;
    }

    const inputData = { fname, lname, username, password };

    console.log('Submitting Sign Up Form details...');
    console.table(inputData);

    try {
      const { data } = await axios.post(
        'http://127.0.0.1:3000/sign-up',
        inputData
      );
      // setUsername(username)
      handleLogin();
      console.log('Server responded with:', data);
      navigate('/e-pitaka/home');

    } catch (e) {
      // Catch errors from the backend here
      window.alert(e.message);
    }
  };

  // Helper function for handling input change events
  const handleChange = (e, setFn) => {
    setFn(e.target.value);
  };

  return (
    <>
      <div className="card text-center form-container sign-up-form">
        <form onSubmit={handleSubmit}>
          <h3>CREATE ACCOUNT</h3>
          {userExists && <p className='text-danger'>Username Already Exists</p>}
          <div className="row input-area">
            <div className="col-sm">
              <label>First Name</label>
              <input
                onChange={(e) => {
                  handleChange(e, setFname);
                }}
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className=" col-sm">
              <label>Last Name</label>
              <input
                onChange={(e) => {
                  handleChange(e, setLname);
                }}
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="row input-area">
            <div className="col">
              <label>Your Username</label>
              <input
                onChange={(e) => {
                  handleChange(e, setUsernameLocal);
                }}
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className=" row input-area">
            <div className="col">
              <label>Your Password</label>
              <input
                onChange={(e) => {
                  handleChange(e, setPassword);
                }}
                type="password"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row input-area">
            <div className="col">
              <label>Valid ID</label>
              <input
                type="file"
                className="form-control"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="sign-up-button">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;