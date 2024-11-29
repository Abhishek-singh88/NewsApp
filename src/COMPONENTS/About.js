import React from 'react';

export default function About() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
                    <div className="p-3 p-md-4 shadow-lg rounded bg-light">
                        <h4 className="mb-4 text-primary">About Us</h4>
                        <p className="text-muted">
                            Welcome to <span className="fw-bold text-info">NewsApp</span>, your go-to platform for staying informed with the latest updates from around the globe.
                        </p>
                        <p className="text-dark">
                            We bring you curated news across a variety of categories, including:
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                            <span className="badge bg-success">Business</span>
                            <span className="badge bg-warning text-dark">Entertainment</span>
                            <span className="badge bg-danger">Health</span>
                            <span className="badge bg-info">Sports</span>
                            <span className="badge bg-primary">Science</span>
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
