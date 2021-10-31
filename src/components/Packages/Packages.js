import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://boiling-eyrie-00422.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        //  showing all package section
        <div className="container">
            <h2 className="text-danger my-3">Our services</h2>
            <hr />
            <div className="row g-3">
                {
                items.map(item => <Package
                    key={item._id}
                    item={item}
                ></Package>)
            }
            </div>
        </div>
    );
};

export default Packages;