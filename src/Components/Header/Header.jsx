import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";


const Header = () => {
    const { user, logOut } = useContext(AuthContext)



    const handleSignOut = () => {
        swal({
            title: "Are you sure you want to log out?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                logOut()
                .then(() => {
                    swal("Log Out", "successful", "success")
                })
                .catch(error => {
                    console.log(error);
                })
            }
          });
    }

    const navLinks = <>

        <li className='bg-gray-200 '><NavLink
            to="/"
            style={{width : '100%', display : 'block' ,paddingLeft : '10px'}}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-500 text-white rounded" : ""
            }
        >
            Home
        </NavLink></li>
        <li className='bg-gray-200 '><NavLink
            to="/gallery"
            style={{width : '100%', display : 'block', paddingLeft : '10px'}}
            className={({ isActive, isPending }) =>
                isPending ? "pending w-full" : isActive ? "bg-purple-500 text-white rounded w-full" : "w-full px-1"
            }
        >
            Gallery
        </NavLink></li>
        <li className='bg-gray-200 '><NavLink
            to="/about"
            style={{width : '100%', display : 'block',paddingLeft : '10px'}}
            className={({ isActive, isPending }) =>
                isPending ? "pending w-full" : isActive ? "bg-purple-500 text-white rounded w-full" : " w-full"
            }
        >
            About us
        </NavLink></li>
        <li className='bg-gray-200 '><NavLink
            to="/contact"
            style={{width : '100%', display : 'block',paddingLeft : '10px'}}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-500 text-white rounded" : ""
            }
        >
            Contact
        </NavLink></li>
        
    </>


    return (
        <div className="bg-gray-400">
            <div className="navbar py-3 max-w-[1500px] mx-auto px-4 md:px-8 lg:px-16">
                <div className="navbar-start md:pl-8" >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="space-y-2 w-36 dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="md:w-1/3 w-2/3" src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/Logo-dark.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex text-xl font-medium gap-8">
                        <li ><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-purple-500 text-white rounded px-4 py-2" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                        <li ><NavLink
                            to="/gallery"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-purple-500 text-white rounded px-4 py-2" : ""
                            }
                        >
                            Gallery
                        </NavLink></li>
                        <li><NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-purple-500 text-white rounded px-4 py-2" : ""
                            }
                        >
                            About us
                        </NavLink></li>
                        <li><NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-purple-500 text-white rounded px-4 py-2" : ""
                            }
                        >
                            Contact
                        </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end pr-8">
                    <ul className="text-xl flex items-center font-bold">
                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} >
                                    <div className="avatar cursor-pointer">
                                        <div className="w-11 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2">
                                            {
                                                user?.photoURL ?
                                                    <img src={user.photoURL} /> :
                                                    <img className="bg-purple-500 text-white" />
                                            }
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[2] menu p-3 shadow space-y-2 min-w-[150px] bg-base-100 rounded-box px-4">
                                    <li>{user.displayName}</li>
                                    <li >{user.email}</li>
                                    <hr />
                                    <button onClick={handleSignOut} className="text-xl border-black border-2 p-1 bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-lg text-left">Log out</button>
                                </ul>
                            </div> :
                                <li><NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-purple-500 text-white rounded px-4 py-2" : ""
                                    }
                                >
                                    Login
                                </NavLink></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;