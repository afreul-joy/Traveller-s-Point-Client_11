import React, { useState } from 'react';
import './Sport.css';

const Sports = () => {
    return (
        <div className="container">
            <div>
                <h3 className="text-warning my-3">Watch Tourist Sports News</h3>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12 col-md-6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2U1rLsuw2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-lg-6 col-12 col-md-6">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/T7Q1XGVujqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
                </div>
            </div>               
        </div>
    );
};

export default Sports;
