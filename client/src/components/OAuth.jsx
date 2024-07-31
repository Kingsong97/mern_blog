import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useState } from "react";

export default function OAuth() {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            setError(null); // 기존 에러 초기화
            const resultsFromGoogle = await signInWithPopup(auth, provider);

            console.log(resultsFromGoogle);
            const res = await fetch("/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
            });
            const data = await res.json();

            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate("/");
            }

        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    const handleFacebookClick = async () => {
        const provider = new FacebookAuthProvider();
        provider.setCustomParameters({ display: "popup" });

        try {
            setError(null); // 기존 에러 초기화
            const resultsFromFacebook = await signInWithPopup(auth, provider);

            console.log(resultsFromFacebook);
            const res = await fetch("/api/auth/facebook", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: resultsFromFacebook.user.displayName,
                    email: resultsFromFacebook.user.email,
                    facebookPhotoUrl: resultsFromFacebook.user.photoURL,
                }),
            });
            const data = await res.json();

            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate("/");
            }

        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    return (
        <div>
            {error && <p className="text-red-500">{error}</p>}
            <button className="flex w-full border p-4 mt-2 justify-center hover:bg-slate-200" onClick={handleGoogleClick}>
                구글로 가입하기
            </button>
            <button className="flex w-full border p-4 mt-2 justify-center hover:bg-slate-200" onClick={handleFacebookClick}>
                페이스북으로 가입하기
            </button>
        </div>
    );
}
