import { useState } from 'react';

const SignIn = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="hidden md:flex justify-center items-center bg-white p-6">
                    <img
                        src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg"
                        alt="user login"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center p-8">
                    {isSignUp ? (
                        <form className="space-y-6">
                            <h1 className="text-2xl font-bold">Create Account</h1>
                            <div className="flex items-center border-b border-gray-300 py-2">
                                <i className='bx bx-user mr-3 text-green-500'></i>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                />
                            </div>
                            <div className="flex items-center border-b border-gray-300 py-2">
                                <i className='bx bx-at mr-3 text-green-500'></i>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                />
                            </div>
                            <div className="flex items-center border-b border-gray-300 py-2">
                                <i className='bx bx-lock mr-3 text-green-500'></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                />
                            </div>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                                Sign Up
                            </button>
                            <div className="flex items-center justify-between">
                                <span>Already have an account?</span>
                                <button type="button" className="text-green-500 hover:text-green-700" onClick={toggleForm}>
                                    Sign In
                                </button>
                            </div>
                            <div className="flex justify-center space-x-4 mt-4">
                                <a href="#" className="text-green-500"><i className='bx bxl-facebook'></i></a>
                                <a href="#" className="text-green-500"><i className='bx bxl-twitter'></i></a>
                                <a href="#" className="text-green-500"><i className='bx bxl-google'></i></a>
                                <a href="#" className="text-green-500"><i className='bx bxl-github'></i></a>
                            </div>
                        </form>
                    ) : (
                        <form className="space-y-6">
                            <h1 className="text-2xl font-bold">Sign In</h1>
                            <div className="flex items-center border-b border-gray-300 py-2">
                                <i className='bx bx-user mr-3 text-green-500'></i>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                />
                            </div>
                            <div className="flex items-center border-b border-gray-300 py-2">
                                <i className='bx bx-lock mr-3 text-green-500'></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-green-500 hover:text-green-700">Forgot Password?</a>
                            </div>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                                Sign In
                            </button>
                            <div className="flex items-center justify-between">
                                <span>Dont have an account?</span>
                                <button type="button" className="text-green-500 hover:text-green-700" onClick={toggleForm}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignIn;
