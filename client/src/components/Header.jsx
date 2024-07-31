import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
export default function Header() {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const { theme } = useSelector((state) => state.theme);
    return (
        <header id='header' className="bg-black text-white">
            <div className="flex  justify-between items-center p-4">
                <nav>
                    <div className="cursor-pointer"><IoMdMenu className="size-5" /></div>
                    <ul className="bg-white text-black p-4 absolute top-0 left-0 hidden">
                        <li className="border-b border-black pr-20 py-2 text-xl">Menu</li>
                        <li className="pr-20 py-2 text-xl text-gray-400"><Link rel="stylesheet" href="/">Home</Link></li>
                        <li className="pr-20 py-2 text-xl text-gray-400"><Link rel="stylesheet" href="/sign-in">SignIn</Link></li>
                        <li className="pr-20 py-2 text-xl text-gray-400"><Link rel="stylesheet" href="/sign-up">SignUp</Link></li>
                    </ul>
                </nav>
                <h1 className="text-2xl font-['notosanskr']">
                    <Link href='/'><span className="font-bold">Kingsong</span> Blog</Link>
                </h1>
                <div className="flex">
                    <button onClick={() => dispatch(toggleTheme())} >
                        {theme === "light" ? <MdOutlineLightMode className="size-6" /> : <MdOutlineDarkMode className="size-6" />}
                    </button>
                    <button className="px-2  ml-1">
                        <FaSearch className="size-5" />
                    </button>
                    {/* <button className="px-2">
                        signin
                    </button>
                    <button className="px-2">
                        signup
                    </button> */}
                    {currentUser ? (
                        <>
                            <img
                                className="rounded-full w-7 h-7 ml-1"
                                src={currentUser.profilePicture} />
                            <div className="absolute flex flex-col items-center p-3 border border-gray-300 rounded-lg shadow-xl bg-white top-20 right-5 w-64 text-gray-800 space-y-4">
                                <div className="flex flex-col items-start space-y-1">
                                    <span className="font-medium text-lg">{currentUser.username}</span>
                                    <span className="text-sm text-gray-500">{currentUser.email}</span>
                                </div>
                                <Link
                                    to={'/dashboard?tab=profile'}
                                    className="w-full px-4 py-2 text-center text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                                >
                                    Profile
                                </Link>
                                <button className="w-full px-4 py-2 text-center text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600 transition duration-200">
                                    Sign Out
                                </button>
                            </div>
                        </>
                    ) : (
                        <Link to={"/sign-in"}>로그인</Link>
                    )}
                </div>
            </div>
        </header >
    )
}