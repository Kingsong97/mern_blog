import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        // console.log(e.target.value);
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    // console.log(formData);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            return setErrorMessage("모든 영역을 채워주세요!");
        }

        try {
            setLoading(true);
            setErrorMessage(null);

            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.success == false) {
                return setErrorMessage(data.message);
            }

            setLoading(false);

            if (res.ok) {
                navigate("/sign-in")
            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Create Account</h1>
            <div className="flex items-center border-b border-gray-300 py-2">
                <i className='bx bx-user mr-3 text-green-500'></i>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                    onChange={handleChange}
                />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
                <i className='bx bx-at mr-3 text-green-500'></i>
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                    onChange={handleChange}
                />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
                <i className='bx bx-lock mr-3 text-green-500'></i>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                    onChange={handleChange}
                />
            </div>
            {errorMessage && (
                <div className="mt-5 px-2 text-red-500 bg-red-200">
                    {errorMessage}error
                </div>
            )}
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                Sign Up
            </button>
            <div className="flex items-center justify-between">
                <span>Already have an account?</span>
                <button type="button" disabled={loading} className="text-green-500 hover:text-green-700">
                    {loading ? (
                        <span className="p-2">Loading...</span>
                    ) : (
                        "Sgin Up"
                    )}
                </button>
                <OAuth />
            </div>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-green-500"><i className='bx bxl-facebook'></i></a>
                <a href="#" className="text-green-500"><i className='bx bxl-twitter'></i></a>
                <a href="#" className="text-green-500"><i className='bx bxl-google'></i></a>
                <a href="#" className="text-green-500"><i className='bx bxl-github'></i></a>
            </div>
        </form>
    )
}

export default SignUp