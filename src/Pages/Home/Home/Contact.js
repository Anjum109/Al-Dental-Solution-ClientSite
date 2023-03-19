import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/interior-doctor-s-office-modern-clinic_236854-3659.jpg?w=2000")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us For Any Query:</h1>
                        <p className="mb-5">32, Dhopadighir par, Sylhet</p>
                        <p>Email: amdentalsolution@gmail.com</p>
                        <p>Phone Number: 01222222222222</p>
                        <button className="btn"><Link to='/services'>See Our All Services</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;