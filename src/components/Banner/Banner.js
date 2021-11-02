import React from 'react';
import banner1 from '../../img/ban (1).jpg'
import banner2 from '../../img/ban (2).jpg'
import banner3 from '../../img/ban (4).jpg'

const Banner = () => {
    // banner section
    return (
        <div id="carouselExampleCaptions" class="carousel slide container" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block img-fluid w-80" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>TRAVELLING AROUND THE WORLD</h5>
        <p>It’s wonderful to travel—to meet new people, see new places, experience different cultures, live life the way life is lived somewhere else.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={banner2}class="d-block img-fluid w-80" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>EXPERIENCE THE NATURE'S BEAUTY</h5>
        <p>One of the best things you can do for your mental health every now and again, especially as a busy college student with an evening job or a young professional working 12-hour shifts, is to disconnect in order to recharge.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={banner3}class="d-block img-fluid w-80" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>GIVE TIME FOR YOURSELF</h5>
        <p>Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one’s lifetime.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Banner;