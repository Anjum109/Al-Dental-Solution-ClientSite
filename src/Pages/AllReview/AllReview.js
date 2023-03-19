import React, { useEffect, useState } from 'react';
import AllReviewsList from './AllReviewsList';

const AllReview = ({ serviceID }) => {
    const [showAllTheReviews, setShowAllTheReviews] = useState([]);

    useEffect(() => {
        fetch(`https://al-dental-solution-server.vercel.app/reviews/${serviceID}`)
            .then(res => res.json())
            .then(data => setShowAllTheReviews(data))
    }, [showAllTheReviews]);


    console.log(showAllTheReviews);
    return (
        <div>
            <h1 className='lg:text-3xl text-blue-600 font-bold mt-5 text-2xl text-center'> {
                showAllTheReviews.length > 0 ? <p>You have total {showAllTheReviews.length} reviews</p> : <p>No Reviews available</p>
            }</h1>
            <h1 className='text-5xl text-gray-600 font-bold text-center mt-5'>All Reviews:</h1>

            <div className='mt-5 p-12'>
                {
                    showAllTheReviews.map(reviews => <AllReviewsList
                        key={reviews._id}
                        reviews={reviews}
                    ></AllReviewsList>)
                }
            </div>
        </div>
    );
};

export default AllReview;