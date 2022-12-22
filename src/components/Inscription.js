import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Inscription() {
  // State for storing form input values
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a request to the server to create a new user in the database
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
        <Link to="/">Home</Link>
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        <br />
        <button type="submit">Sign Up</button>
        </form>
        <p>Vous avez déjà un compte ? <Link to='/login'>Cliquez ici</Link></p>
    </div>
  );
}

export default Inscription;