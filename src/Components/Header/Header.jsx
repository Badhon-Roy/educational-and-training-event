import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";


const Header = () => {
    const { user, logOut } = useContext(AuthContext)



    const handleSignOut = () => {
        logOut()
            .then(() => {
                swal("Log Out", "successful", "success")
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navLinks = <>

        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 rounded" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 rounded" : ""
            }
        >
            About us
        </NavLink></li>
        <li><NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 rounded" : ""
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
                        <ul tabIndex={0} className="space-y-2 menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44">
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
                                isPending ? "pending" : isActive ? "bg-green-400 rounded px-4 py-2" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                        <li><NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400 rounded px-4 py-2" : ""
                            }
                        >
                            About us
                        </NavLink></li>
                        <li><NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400 rounded px-4 py-2" : ""
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
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            {
                                                user?.photoURL ?
                                                    <img src={user.photoURL} /> :
                                                    <img className="bg-green-400" />
                                            }
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-3 shadow space-y-2 min-w-[150px] bg-base-100 rounded-box px-4">
                                    <li>{user.displayName}</li>
                                    <li >{user.email}</li>
                                    <hr />
                                    <button onClick={handleSignOut} className="text-xl border-black border-2 p-1 hover:bg-green-300 rounded-lg text-left">Log out</button>
                                </ul>
                            </div> :
                                <li><NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-green-400 rounded px-4 py-2" : ""
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