import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://al-dental-solution-server.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className='text-center mb-4 p-4'>
                <p className="text-2xl font-bold text-orange-600"></p>
                <h2 className="mb-5 mt-12 text-5xl text-gray-600 font-bold">Our Service Area</h2>
                <p className='text-gray-500'>The majority have suffered different types of teeth's problem. For that reason we have arranged all of the tretements system in our AM Dental Solution . </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='mt-12'><button className='button-56'><Link to='/services'>See All Services</Link></button></div>
        </div>
    );
};

export default Services;