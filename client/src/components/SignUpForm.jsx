import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import axios from 'axios';

function SignUpForm({ handleLogin }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Called when the button with type="submit" inside the form is pressed
  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputData = { fname, lname, username, password };

    console.log('Submitting Sign Up Form details...');
    console.table(inputData);
    try {
      const { data } = await axios.post(
        'http://127.0.0.1:3000/sign-up',
        inputData
      );
      console.log('Server responded with:', data);
      navigate('/e-pitaka/home');
      handleLogin();
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
          <div className="row input-area">
            <div className="col-sm">
              <label>First Name</label>
              <input
                onChange={(e) => {
                  handleChange(e, setFname);
                }}
                type="text"
                className="form-control"
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
              />
            </div>
          </div>

          <div className="row input-area">
            <div className="col">
              <label>Your Username</label>
              <input
                onChange={(e) => {
                  handleChange(e, setUsername);
                }}
                type="text"
                className="form-control"
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
              />
            </div>
          </div>
          <div className="row input-area">
            <div className="col">
              <label>Valid ID</label>
              <input type="file" className="form-control" />
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