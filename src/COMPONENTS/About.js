import React from 'react';

export default function About() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <div className="p-4 shadow-lg rounded bg-light">
                        <h4 className="mb-4 text-primary">About Us</h4>
                        <p className="text-muted">
                            Welcome to <span className="fw-bold text-info">NewsApp</span>, your go-to platform for staying informed with the latest updates from around the globe.
                        </p>
                        <p className="text-dark">
                            We bring you curated news across a variety of categories, including:
                        </p>
                        <div className="d-flex justify-content-center mb-3">
                            <span className="badge bg-success me-2">Business</span>
                            <span className="badge bg-warning text-dark me-2">Entertainment</span>
                            <span className="badge bg-danger me-2">Health</span>
                            <span className="badge bg-info me-2">Sports</span>
                            <span className="badge bg-primary me-2">Science</span>
                            <span className="badge bg-secondary">Technology</span>
                        </div>
                        <p className="text-muted">
                            Our goal is to deliver timely, accurate, and unbiased news to keep you well-informed and up-to-date. Whether you're a professional seeking industry insights or someone keeping track of world events, we've got you covered.
                        </p>
                        <p className="text-muted">
                            Built with cutting-edge technology, our site ensures a seamless and engaging browsing experience.
                        </p>
                        <h5 className="text-success">Stay connected, stay informed!</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
