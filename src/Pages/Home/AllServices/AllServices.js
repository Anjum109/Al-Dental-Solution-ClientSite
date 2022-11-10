import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllServiceCards from './AllServiceCards';


const AllServices = () => {
    const [allServices, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className='text-center mb-4 p-4'>
                <p className="text-2xl font-bold text-orange-600"></p>
                <h2 className="button-54 mb-5 mt-12">Our Service Area</h2>
                <p>The majority have suffered different types of teeth's problem. For that reason we have arranged all of the tretements system in our AM Dental Solution . </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5'>
                {
                    allServices.map(service => <AllServiceCards
                        key={service._id}
                        service={service}
                    ></AllServiceCards>)
                }
            </div>
        </div>
    );
};

export default AllServices;