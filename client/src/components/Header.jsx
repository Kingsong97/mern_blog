import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    return (
        <header id="header" className="flex justify-between items-center w-full h-16 bg-white uppercase px-40">
            <h1 className="logo font-caveat text-2xl">kingsong</h1>
            <nav className="top_nav font-roboto font-light lg:flex">
                <ul className="flex gap-4">
                    <li><Link to="#">home</Link></li>
                    <li><Link to="#">about</Link></li>
                    <li><Link to="#">blog</Link></li>
                    <li><Link to="#">portfolio</Link></li>
                    <li><Link to="#">contact</Link></li>
                </ul>
            </nav>
            <div className="setting flex gap-4">
                <div className="login text-xl"><IoLogInOutline /></div>
                <div className="dark_mode text-xl"><MdDarkMode /></div>
                <div className="menu_box text-xl lg:hidden"><IoMdMenu /></div>
            </div>
        </header>
    );
}

export default Header;
