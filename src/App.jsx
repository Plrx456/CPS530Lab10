import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <div className="container my-5">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Building a Web Page with React and Vite</h1>
        <p className="text-muted">A simple project showcasing React, Vite, and Bootstrap</p>
      </header>

      {/* Main Content */}
      <main>
        {/* Installation Section */}
        <section className="mb-5">
          <h2 className="h4 text-secondary">Installation Process</h2>
          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-primary">Step 1</h5>
                  <p className="card-text">Install Vite using <code>npm create vite@latest my-react-app</code>.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-primary">Step 2</h5>
                  <p className="card-text">Choose React as the framework during setup.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-primary">Step 3</h5>
                  <p className="card-text">Install all dependencies using <code>npm install</code>.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-primary">Step 4</h5>
                  <p className="card-text">Start the development server using <code>npm run dev</code>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Was Built Section */}
        <section className="mb-5">
          <h2 className="h4 text-secondary">How the Page Was Built</h2>
          <p className="mt-3">
            Edited the <code>App.jsx</code> file to include setup information and resolved issues.
          </p>
          <p>
            Leveraged Bootstrap's grid system and utility classes for styling and responsiveness.
          </p>
        </section>

        {/* Challenges Section */}
        <section className="mb-5">
          <h2 className="h4 text-secondary">Challenges</h2>
          <div className="accordion mt-3" id="challengesAccordion">
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Challenge 1: Initial Setup
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#challengesAccordion"
              >
                <div className="accordion-body">
                  The initial process took some trial and error, but the documentation was helpful.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Challenge 2: Folder Structure
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#challengesAccordion"
              >
                <div className="accordion-body">
                  The folder structure was initially confusing, but experimenting clarified it.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Challenge 3: Browser Not Refreshing
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#challengesAccordion"
              >
                <div className="accordion-body">
                  The browser did not reflect updates without restarting the server, which was confusing initially.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p className="text-muted">
          CPS530 Lab10 Sarthak Pradhan | Built with React, Vite, and Bootstrap
        </p>
      </footer>
    </div>
  );
};

export default App;
