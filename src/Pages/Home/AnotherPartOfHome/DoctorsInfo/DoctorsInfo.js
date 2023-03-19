import React from 'react';
import { Link } from 'react-router-dom';
import doctorImage from '../../../../images/doctor pic/doctor.png'

const DoctorsInfo = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={doctorImage} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:pr-12'>
                        <h2 className='text-3xl text-center'> Intruducing of Our AM Solutions Doctor:</h2>
                        <h1 className="text-5xl font-bold text-center">Doctor AM Hasnath</h1>
                        <p className="py-6 text-center">B.D.S (Dhaka) BCS(Health) <br />
                            P.G.T (Oral Surgery)<br />
                            P.G.T (Conservation)<br />
                            Oral And Dental Sergon. <br />
                            <span className='text-2xl'>  Sylhet MAG Osmani Medical College, Sylhet.</span>


                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DoctorsInfo;