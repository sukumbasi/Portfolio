import React from 'react';

const RequestCvButton = () => {
    const handleClick = () => {
        const email = prompt('Please enter your email address:');
        if (email) {
            window.location.href = `mailto:youremail@example.com?subject=Request for CV&body=Hello, I would like to request a copy of your CV. Please send it to the following email address: ${email}`;
        } else {
            alert('Email address is required to request a CV.');
        }
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            Get CV
        </button>
    );
};

const buttonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black
    border: '2px solid black',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    position: 'fixed',
    top: '20px',
    right: '20px',
    borderRadius: '12px', // Rounded edges
};

export default RequestCvButton;
