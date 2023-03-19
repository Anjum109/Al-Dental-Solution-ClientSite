import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import './Services.css'

const ServiceCard = ({ service }) => {
    const { image_url, Service_name, Total_Cost, description, _id } = service;
    return (
        <div className='flex justify-center items-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-gray-600 shadow-xl">
                <figure className='h-56'>
                    <PhotoProvider>
                        <PhotoView src={image_url}>
                            <img src={image_url} alt="" className='w-full h-100' />
                        </PhotoView>
                    </PhotoProvider>

                </figure>
                <div className="card-body">
                    <h2 className="card-title">{Service_name}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Total Cost: ${Total_Cost}</p>
                    <div className="card-actions justify-end">
                        <p className='text-justify'>{description.slice(0, 100)}</p>
                        <Link to={`/services/${_id}`}>
                            <button className="button-80">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;