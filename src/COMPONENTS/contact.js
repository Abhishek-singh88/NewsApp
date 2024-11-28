import React from 'react';

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 bg-light text-dark">
        <div className="card-body">
          <h2 className="card-title text-center text-primary">Get in Touch</h2>
          <p className="card-text text-center text-secondary">
            <i className="bi bi-chat-dots-fill"></i> Feel free to reach out to us anytime!
          </p>
          <hr />
          <div className="text-center">
            <h4 className="text-success">Email</h4>
            <h5 className="text-info">Abhisheksingh4928@gmail.com</h5>
          </div>
          <div className="text-center mt-4">
            <a 
              href="mailto:Abhisheksingh4928@gmail.com" 
              className="btn btn-outline-primary btn-lg"
            >
              <i className="bi bi-envelope"></i> Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
