import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../img/ban (1).jpg'
import banner2 from '../../img/ban (2).jpg'
import banner3 from '../../img/ban (4).jpg'

const Banner = () => {
    return (
        <div className="container" >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src={banner1} className="img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Enjoy Your Winter  Vacation</h5>
        <p>Summer Vacation is cool. You can Enjoy With us</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Enjoy Your Summer Vacation</h5>
        <p>Winter Vacation is so Hot. You can Enjoy With us </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Enjoy Your Autumn Vacation</h5>
        <p>Autumn Vacation is so Gorgeous. You can Enjoy With us .</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;