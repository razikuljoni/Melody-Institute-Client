/* eslint-disable react/prop-types */
import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "../components/Loading/Loading.jsx";
import app from "../configs/firebase.config.js";
import { showErrorMessage, showSuccessMessage } from "../utils/Notification.js";

export const AuthContext = createContext(null);

export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, [user]);

    const emailPasswordUserCreate = async (email, password) => {
        setError("");
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    const emailPasswordUserLogin = (email, password) => {
        setError("");
        return signInWithEmailAndPassword(auth, email, password);
    };

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const continueWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    const continueWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                showSuccessMessage("👍 SignOut Successfully!");
            })
            .catch((err) => {
                showErrorMessage(err.message);
            });
    };

    const authInfo = {
        user,
        loading,
        error,
        setError,
        emailPasswordUserCreate,
        emailPasswordUserLogin,
        continueWithGoogle,
        continueWithGithub,
        continueWithFacebook,
        logOut,
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}{" "}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </AuthContext.Provider>
    );
};

export default AuthProvider;
