import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

import AllReview from '../AllReview/AllReview';
import './DetailsOfSurvice.css';



const DetailsOfService = () => {
    const serviceDetails = useLoaderData([]);
    useTitle('Details & Push Review')

    // console.log(serviceDetails);

    const { _id, image_url, Service_name, title, BenefitsAndRisks, description, structure_img, } = serviceDetails;

    const { user } = useContext(AuthContext);
    // console.log(user?.photoURL);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const review = form.review.value;
        console.log(name, photoURL, review);

        const reviews = {
            service: _id,
            patient: name,
            photoURL,
            review,
            email,
            time: new Date()
        };

        fetch('https://al-dental-solution-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("Review Placed Succecfully")
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='grid gap-6 grid-cols-1 mt-12 max-w-screen-xl mx-auto' >
            {/* card details  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div>
                    <div><h2 className="text-center font-bold text-gray-600 text-5xl">{Service_name}</h2></div>
                    <p className='text-center lg:text-2xl mb-5'>{title}</p>
                    <figure className="px-10 pt-10 flex justify-center items-center">
                        <img src={image_url} alt="Shoes" className="rounded-xl w-full h-auto" />
                    </figure>
                </div>
                <div>
                    <p className='p-12 lg:p-0 text-justify'>{description}</p>

                </div>
            </div>


            {/* review part  */}
            <div className='mt-12'>
                <h2 className='text-5xl text-gray-600 font-bold text-center'>Review Section</h2>
                <p className='text-center text-gray-400 text-2xl'>Give us your valuable review here.</p>
                <div className='bg-gray-100 mx-12 mt-12 p-5 grid grid-cols-1 gap-6'>
                    <form onSubmit={handleReview}>
                        <input type="text" name="name" placeholder="Type Your Name" defaultValue={user?.displayName} className="input input-bordered w-full " />
                        <img name="photoURL" src={user?.photoURL} alt="" className='mx-auto mt-5' />
                        <input name="email" type="email" placeholder="email" className="input input-bordered mt-5 w-full
                         " defaultValue={user?.email} hidden />
                        <input name="photoURL" type="text" placeholder="PhotoURL" className="input mt-5 mx-auto input-bordered w-full
                         " defaultValue={user?.photoURL} hidden />
                        <textarea name="review" type="text" placeholder="Type Your review" className="input mt-5 input-bordered w-full h-36" required />
                        {
                            user?.email ? (
                                <input type="submit" className="input input-bordered mt-5 w-full" value="Submit Your Review" />
                            ) : (
                                <button>Please
                                    <Link to='/login'> Login First</Link> For give us the review.
                                </button>

                            )
                        }

                    </form>
                </div>
                <div>
                    <AllReview serviceID={_id}></AllReview>
                </div>
            </div>
        </div>
    );
};

export default DetailsOfService;