import React, { useEffect, useState } from 'react';
import '../component/PopularDesitnationTray.css';
import mum from "./imagesDest/mum.jpg";
import ba from "./imagesDest/ba.jpg";
import pune from "./imagesDest/pune.jpg";
import { Link } from 'react-router-dom';

export default function PopularDesitnationTray() {
    const [content, setcontent] = useState([]);
    const array = [
        { city: "mumbai", desc: "mumbai desc", img: mum },
        { city: "bangalore", desc: "bengaluru desc", img: ba },
        { city: "pune", desc: "pune desc", img: pune },
        { city: "re", desc: "pune desc", img: pune },
        { city: "re", desc: "pune desc", img: pune },
       
        { city: "re", desc: "pune desc", img: pune }
       
    ];

    useEffect(() => {
        setcontent([...array]);
    }, []);

    return (
        <div className="container" id="fixed">
            <div className="row" id="row2">
                {content.map((d, index) => (
                    <div key={index} className="col-md-4 col-sm-6 mb-3">
                        <div className="card" id="myCont">
                            <div className="card-body">
                                <div id='imgheight'>
                                    <img className="card-img-top" src={d.img} alt={d.city} />
                                </div>
                                <div id='restdiv'>
                                    <h5 className="card-title">{d.city}</h5>
                                    <p className="card-text">{d.desc}</p>
                                    <Link to="/Book" className="btn btn-primary" id="upbutton">Book a Flight</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
