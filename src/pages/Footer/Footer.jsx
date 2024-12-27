import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Help & Information</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">FAQ</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Shipping</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Returns</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Our Story</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Careers</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Categories</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Electronics</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Fashion</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Home & Garden</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; 2024 Your Company
      </div>
    </footer>
  );
}

export default Footer;

