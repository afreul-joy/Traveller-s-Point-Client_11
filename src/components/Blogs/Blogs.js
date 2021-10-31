import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
          // blog  section
        <>
            <div className="blog-text my-2">
                <h1 className="text-center text-danger">Our Blogs</h1>
            </div>
            <div className="blogs-section container">
                <div class="blog-card">
                    <img src="https://i0.wp.com/hippocketwifi.com/wp-content/uploads/2016/07/Capture-d%E2%80%99e%CC%81cran-2016-07-19-a%CC%80-14.16.12-400x400.png" class="blog-image" alt="" />
                    <h1 className="blog-title">1. World of Wanderlust</h1>
                    <p class="blog-overview">Brooke is a 24 years old blogger, passionate about travels, DIY and food. Through her blog, she made us discover her best experiences and share tips to travel better.
                    Her Instagram account is a real source of inspiration for us to </p>
                </div>
                <div class="blog-card">
                    <img src="https://i0.wp.com/hippocketwifi.com/wp-content/uploads/2016/07/13254154_10153634781939067_1876776755482121573_n-450x400.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">2. Nomadic Matt</h1>
                    <p class="blog-overview">Matt is one of the most famous travel bloggers in the world, having visited more than 80 countries and territories. Since 2006, he shares through his blog his travel tips, best experiences and his way of life. He is also author of the New York Times best-selling book, How to Travel the World on $50 a D</p>
                </div>
                <div class="blog-card">
                    <img src="https://i1.wp.com/hippocketwifi.com/wp-content/uploads/2016/07/Capture-d%E2%80%99e%CC%81cran-2016-07-19-a%CC%80-15.03.51-400x400.png" class="blog-image" alt="" />
                    <h1 className="blog-title">3. Globetrotter girls</h1>
                    <p class="blog-overview">Since 2010, Dani shares her travel tips and experiences with us, making us want to discover the world. Her enthusiasm and her love of life make her an exceptional person that we all would want to meet.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i2.wp.com/hippocketwifi.com/wp-content/uploads/2016/07/Capture-d%E2%80%99e%CC%81cran-2016-07-19-a%CC%80-11.02.22-400x400.png" class="blog-image" alt="" />
                    <h1 className="blog-title">4.  Budget Traveller</h1>
                    <p class="blog-overview">Kash Bhattacharya is an expert in Euro travel and accommodation reviews as well so you definitely need to check out his blog.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i0.wp.com/hippocketwifi.com/wp-content/uploads/2016/07/Capture-d%E2%80%99e%CC%81cran-2016-07-19-a%CC%80-11.28.22-400x400.png" class="blog-image" alt="" />
                    <h1 className="blog-title">5. Rick Steves</h1>
                    <p class="blog-overview">Rick Steeves is a Guidebook author and a globetrotter, who shares practical information and tips about various destinations in Europe. He also organizes and leads energetic tours throughout Europe.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i2.wp.com/hippocketwifi.com/wp-content/uploads/2016/07/Capture-d%E2%80%99e%CC%81cran-2016-07-19-a%CC%80-11.52.32-400x400.png" class="blog-image" alt="" />
                    <h1 className="blog-title">6.  Vicky flipflop travels</h1>
                    <p class="blog-overview">Victoria is a solo female traveller passionate about travel experience and festivals. Through her blog she shares with us all her tips with willingness and enthusiasm – that make us want to meet her and become her friend!
 </p>
                </div>
            </div>
        </>
    );
};

export default Blogs;