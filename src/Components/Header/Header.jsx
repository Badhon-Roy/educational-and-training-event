import { NavLink } from "react-router-dom";


const Header = () => {

    const navLinks = <>

        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 rounded px-3" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 rounded px-3" : ""
            }
        >
            About us
        </NavLink></li>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 rounded px-3" : ""
            }
        >
            Home
        </NavLink></li>
    </>


    return (
        <div className="bg-gray-400">
            <div className="navbar max-w-[1500px] mx-auto px-4 md:px-8 lg:px-16">
                <div className="navbar-start pl-8" >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu space-y-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400 rounded px-4 py-2" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end pr-8">
                    <ul className="text-xl font-bold">
                        <li><NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400 rounded px-4 py-2" : ""
                            }
                        >
                            Login
                        </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;