import React from 'react';

const AllReviewsList = ({ reviews }) => {
    const { patient, photoURL, review, time } = reviews;

    return (
        <div>

            <div className=' grid grid-cols-1 gap-5 mb-5'>
                <div className="card card-side bg-base-100 shadow-xl mx-5">
                    <figure><img className='px-5' src={photoURL} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name:{patient}</h2>
                        <p>{new Date(time).toDateString()}</p>
                        <h5 className="card-title">{review}</h5>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReviewsList;