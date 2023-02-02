import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const BannerItems = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image'>
                <img src={image} alt='' className="w-full" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='lg:text-6xl text-lg font-bold text-white'>
                    Peace<br />
                    Begins With a<br />
                    Smile
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-white text-xl md:text-sm md:visible lg:visible invisible xl:visible'>We create your smile more beautiful. Take care of your teeth, and they will take care of you.</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="button-89 text-white mr-5"><Link to='/login'>Login for more Info</Link></button>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;