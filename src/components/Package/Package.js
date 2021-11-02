import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = ({ item }) => {
    const { packajeName, description, price, img, _id } = item;
    return (
       // pacakge section
            <div className="col-lg-4 col-md-6 col-12 ">
                <div class="my-2 ">
                    <img src={img} class="img-fluid rounded w-75" alt="..." />
                        <h5 class="card-title">{packajeName}</h5>
                        <p class="card-text">{description}</p>
                        <h5 class="card-text">${price}</h5>
                        <Link to={`/review/${_id}`}>
                            <button type="button" class="btn btn-outline-danger m-2">Book:
                                {packajeName}</button>
                        </Link>
                </div> 
            </div>
       
    );
};

export default Package;