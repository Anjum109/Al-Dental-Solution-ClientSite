import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {

    const { createUser, updateUserProfile, loading } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const [success, setSuccess] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const [review, setreview] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Register');

    const from = location.state?.from?.pathname || '/';

    if (loading) {
        return <button className="btn btn-square loading" animation='border' variant='primary' />
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photoURL, email, password);



        if (password.length < 6) {
            setPasswordError("Please should be at least 6 characters");
            return;
        }
        if (!/(?=.[!@#$%&^])/.test(password)) {
            setPasswordError("Please add at least one special character");
            return;
        }
        if (password !== confirm) {
            setPasswordError("password and confirm password did not match");
            return;
        }
        setPasswordError("");

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess(true);
                handleUpdateUserProfile(name, photoURL)
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e)
            });

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <div className="hero min-h-screen bg-slate-100">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-center text-5xl font-bold">SignIn now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" className="input input-bordered" name="name" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="photoURL" type="text" placeholder="Enter Your PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PassWord</span>
                                </label>
                                <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirm"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <p className="text-purple-800">{passwordError}</p>
                                {success && (
                                    <p className="text-success text-2xl">User created successfully</p>
                                )}
                                <button className="button-86 ">SignIn</button>
                            </div>
                            <div className='button-83'>
                                <p >Already Have An Account?</p><Link className='register' to='/login'>LogIn</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;