import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import './Login.css'




const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-slate-100">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-center text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {/* <a href='' className="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                        </div>



                        <div className="form-control mt-6">
                            <p className='text-danger'> {error}</p>
                            <button className="button-86 ">Login</button>
                        </div>
                        <div className='button-83'>
                            <p >New to AM DEntal Solution? </p><Link className='register' to='/register'>SignIn</Link>
                        </div>
                    </form>

                </div>
                <div>
                    <button onClick={handleGoogleSignIn} className='button-74'>Log in With Google</button>

                    <button onClick={handleGithubSignIn} className='button-74'>Log in With Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;