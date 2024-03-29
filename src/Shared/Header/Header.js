import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import logo from '../../images/logo/logo.jpg';
import { FaBeer } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>

        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link>{user?.displayName}</Link>
                        <Link>
                            {
                                user?.photoURL ? <img style={{ height: '40px' }} src={user?.photoURL} alt=""></img> : <FaBeer className='hidden'></FaBeer>
                            }
                        </Link>
                    </li>
                    <li className='font-semibold'><Link onClick={handleLogOut}>LogOut</Link></li>
                    <li className='font-semibold'><Link to='addServices'>Add Services</Link></li>
                    <li className='font-semibold'><Link to='/myReviews'>My Reviews</Link></li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-neutral text-neutral-content rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case flex justify-center items-center text-xl">
                    <img className='w-10 mr-5' src={logo} alt="" />AM Dental Solution
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;