import React from 'react';

const MyReviewList = ({ myAllReviews, handleDelete }) => {

    const { photoURL, patient, review, _id } = myAllReviews;

    return (
        <div className='flex'>
            <div className="card card-side bg-base-100 shadow-xl mt-5">
                <figure><img src={photoURL} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{patient}</h2>
                    <p>{review}</p>
                </div>
            </div>
            <div> <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>

            </label></div>
        </div>
    );
};

export default MyReviewList;