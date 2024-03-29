import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../images/anotherpart/brushing-teeth_1.jpg'
import image2 from '../../../images/anotherpart/Brush_Teeth_Steps.jpg'
import './AnotherPart.css'

const AnotherPartOfHome = () => {
    return (
        <div>
            <div className="min-h-screen bg-base-200 mt-12">
                <div className="flex flex-col lg:flex-row p-12">
                    <div className='flex justify-center items-center'>
                        <img src={image1} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:ml-12 lg:mt-5 sm:mt-12'>
                        <h1 className="lg:text-5xl text-2xl mt-5 font-bold"> BRUSH YOUR TEETH PROPERLY</h1>
                        <p className="py-6">Take Care of your teeth by brushing, flossing, rinsing and they will take care of you.</p>
                        <button className="button-28">Lear More About Our Website <Link className='text-primary'>Click here</Link>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AnotherPartOfHome;