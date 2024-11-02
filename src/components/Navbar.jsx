import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {

    const linkClass = ({ isActive }) => isActive ? 'bg-black text-white rounded-md px-3 py-2 transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300' : 'text-white rounded-md px-3 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300';

    return (
        <>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                            <NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
                                <img className="h-10 w-auto" src={Logo} alt="React Jobs" />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
                            </NavLink>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink to="/" className={linkClass}>
                                        Home
                                    </NavLink>
                                    <NavLink to="/jobs" className={linkClass}>
                                        Jobs
                                    </NavLink>
                                    <NavLink to="/add-job" className={linkClass}>
                                        Add Job
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
