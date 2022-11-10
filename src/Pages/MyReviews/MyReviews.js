import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewList from './MyReviewList';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])
    console.log(myReviews);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h1>You have total {myReviews.length} Reviews.</h1>
            <div className='mt-5 mx-12'>
                {
                    myReviews.map(myAllReviews => <MyReviewList
                        key={myAllReviews._id}
                        myAllReviews={myAllReviews}
                        handleDelete={handleDelete}
                    ></MyReviewList>)
                }
            </div>
        </div>
    );
};

export default MyReviews;