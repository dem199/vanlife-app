import React, { useState } from 'react';

export default function UserProfile() {
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated User Data:', userData);
    setSubmitted(true);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
         <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div className="welcome-message">
          <h2>Welcome {userData.firstName}!</h2>
          <p>Profile successfully created.</p>
        </div>
      )}
    </div>
  );
}
