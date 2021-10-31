import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import './Sport.css';

const Sports = () => {
    
    const [open, setOpen] = useState(false);
    return (
        <div className="container">
            <div>
                <h4 className="text-primary">Watch Tourist Sports News</h4>
            </div>
            <div className="sport-video">
               <iframe width="560" height="315" src="https://www.youtube.com/embed/2U1rLsuw2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

          
        </div>
    );
};

export default Sports;
