import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewList from './MyReviewList';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useTitle('My Reviews');

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
            <h1 className='text-5xl text-center'>
                {
                    myReviews.length > 0 ? <p>You have total {myReviews.length} reviews</p> : <p>No Reviews available</p>
                }
            </h1>
            <div className='mt-5 mx-12 lg:mx-28'>
                {
                    myReviews.map(myAllReviews => <MyReviewList
                        key={myAllReviews._id}
                        myAllReviews={myAllReviews}
                        handleDelete={handleDelete}
                    ></MyReviewList>)
                }
            </div>
        </div >
    );
};

export default MyReviews;