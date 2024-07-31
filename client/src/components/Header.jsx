import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
// import { MdDarkMode } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

const Header = () => {
    // const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const { theme } = useSelector((state) => state.theme);
    // const [darkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    //     if (darkMode) {
    //         document.documentElement.classList.remove('dark');
    //     } else {
    //         document.documentElement.classList.add('dark');
    //     }
    // };


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
                <div className="login text-xl"><Link to="/sign-in"><IoLogInOutline /></Link></div>
                <div className="dark_mode text-xl cursor-pointer" onClick={() => dispatchEvent(toggleTheme())}>
                    {theme === "light" ? <FaSun /> : <FaMoon />}</div>
                <div className="menu_box text-xl md:hidden"><IoMdMenu /></div>
            </div>
            {currentUser ? (
                <>
                    <img className="rounded-full w-11 h-11" src={currentUser.profilePicture} />

                    <div className="absolute flex flex-col p-4 border top-20 right-5 w-60">
                        <span>{currentUser.username}</span>
                        <span>{currentUser.email}</span>
                        <Link to={'/dashboard?tab=profile'}></Link>
                        <span>signOut</span>
                    </div>
                </>) : (
                <Link to={"/sign=in"}>로그인</Link>
            )}
        </header>
    );
}

export default Header;
