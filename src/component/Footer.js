import React, { Component } from 'react'
import{ FaEnvelopeOpen } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="py-5 text-light bg-dark">
        <div className="container py-4">
  <div className="row">
    <div className="col-md-4">
      <h2 className="py-4"> Fit2Planet </h2>
      <p className="">
      Fit2Planet is an outstanding online sports scheduling software which gives solutions for small and medium-sized businesses of all types. We provide high-quality booking services for individuals as well as companies all over the world and help them to grow and prosper. Our reputable and secure appointment system is designed to make bookings easy and comfortable for both our users and their clients!
      </p>
    </div>
    <div className="col-md-8">
      <h1 className="py-4">
        {" "}
        Special Offers For All Brands with 10% Discount{" "}
      </h1>
      <p className="">
        Lorem upiditate delectus rerum vel ullam quas, ea explicabo vero, ad
        eaque a, magni nam amet! Distinctio a ea nulla!
      </p>
    </div>
  </div>
  <div className="row py-4">
    <div className="col-md-4">
      <div className="">
        <i className="bi bi-facebook h2 pe-4" />
        <i className="bi bi-github h2 pe-4" />
        <i className="bi bi-instagram h2 pe-4" />
        <i className="bi bi-linkedin h2 pe-4" />
      </div>
    </div>
    <div className="col-md-4">
      <h4> USEFUL LINKS </h4>
      <div className="row">
        <div className="col-6">
          <p> Home </p>
          <p> About </p>
          <p> Blog </p>
          <p> Contact </p>
        </div>
        <div className="col-6">
          <p> Home </p>
          <p> About </p>
          <p> Blog </p>
          <p> Contact </p>
        </div>
      </div>
    </div>
    {/* <div className="col-md-4">
      <h4> OUR STORE </h4>
      <address>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        molestiae!
      </address>
    </div> */}
    <div className="col-md-4">
  <h4 className="text-uppercase fw-bold mb-4">Contact</h4>
  <p>
    <i className="fas fa-home me-3 text-secondary" /> Western Province
  </p>
  <p>
    <i className="fas fa-envelope me-3 text-secondary" />
    fit2planet@gmail.com
  </p>
  <p>
    <i className="fas fa-phone me-3 text-secondary" /> + 94 766144248
  </p>
</div>
  </div>
</div>
<div className="text-center pb-3">© 2021 Copyright:</div>

      </div>
    )
  }
}
