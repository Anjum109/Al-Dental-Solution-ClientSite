import React from 'react';

const MyReviewList = ({ myAllReviews, handleDelete }) => {

    const { photoURL, patient, review, _id } = myAllReviews;

    return (
        <div className='flex '>
            <div className="card w-full card-side bg-base-100 shadow-xl mt-5">
                <figure><img src={photoURL} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{patient}</h2>
                    <p className='card-text text-justify'>{review}</p>
                </div>

                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>


            </div>

        </div>
    );
};

export default MyReviewList;