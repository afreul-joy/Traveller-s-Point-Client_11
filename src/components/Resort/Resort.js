import React from 'react';
import { Button } from 'react-bootstrap';
import './Resort.css';
const Resort = () => {
    return (
         // resort  section
        <>
            

            <div className="my-3 py-5 bg-danger container ">
                <h5 className="text-center my-2 text-white">Choose Your</h5>
                <h1>Resorts</h1>
                <p>We Provide Best Resort in the world</p>
            </div>

            <div className="container">
                 <div className="row   ">
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid" src="https://www.planetware.com/wpimages/2020/08/europe-best-all-inclusive-resorts-royal-hideaway-corales-suites-spain.jpg" alt="" />
                    <h4 className="text-center my-2">Royal Hideaway Corales Suites, Spain</h4>
                    <Button className="mb-4" variant="outline-secondary">View details</Button>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid" src="https://www.planetware.com/wpimages/2020/08/europe-best-all-inclusive-resorts-bellis-deluxe-hotel-turkey.jpg" alt="" />
                    <h4 className="text-center my-2 text">Bellis Deluxe Hotel, Turkey</h4>
                    <Button className="mb-4" variant="outline-secondary">View details</Button>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="img-fluid" src="https://www.planetware.com/wpimages/2020/08/europe-best-all-inclusive-resorts-westin-dragonara-resort-malta.jpg" alt="" />
                    <h4 className="text-center my-2 text">The Westin Dragonara Resort, Malta</h4>
                    <Button className="mb-4" variant="outline-secondary">View details</Button>
                </div>
            </div>
            </div>
           
        </>

    );
};

export default Resort;