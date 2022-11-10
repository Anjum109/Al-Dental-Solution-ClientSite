import React, { useEffect, useState } from 'react';
import AllReviewsList from './AllReviewsList';

const AllReview = () => {
    const [showAllTheReviews, setShowAllTheReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews/')
            .then(res => res.json())
            .then(data => setShowAllTheReviews(data))
    }, [showAllTheReviews]);


    console.log(showAllTheReviews);
    return (
        <div>
            <h1 className='button-54'>All Reviews:</h1>

            <div className='mt-12 p-12'>
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