import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <header className="flex justify-between items-center w-full h-16 bg-white uppercase px-40 dark:bg-gray-800">
            <h1 className="logo font-caveat text-2xl">kingsong</h1>
            <nav className="top_nav font-roboto font-light hidden md:flex">
                <ul className="flex gap-4">
                    <li><Link to="#" className="text-black dark:text-white">home</Link></li>
                    <li><Link to="#" className="text-black dark:text-white">about</Link></li>
                    <li><Link to="#" className="text-black dark:text-white">blog</Link></li>
                    <li><Link to="#" className="text-black dark:text-white">portfolio</Link></li>
                    <li><Link to="#" className="text-black dark:text-white">contact</Link></li>
                </ul>
            </nav>
            <div className="setting flex gap-4">
                <div className="login text-xl"><Link to="../pages/SignIn.jsx"><IoLogInOutline /></Link></div>
                <div className="dark_mode text-xl cursor-pointer" onClick={toggleDarkMode}><MdDarkMode /></div>
                <div className="menu_box text-xl md:hidden"><IoMdMenu /></div>
            </div>
        </header>
    );
}

export default Header;
