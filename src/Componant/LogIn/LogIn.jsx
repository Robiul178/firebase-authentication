// import { signInWithEmailAndPassword } from "firebase/auth";
// import auth from "../../firebase/firebase.config";
import { useState } from "react";


import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
    // const [loginError, setLoginError] = useState('')//by default kono error thakbena
    const [sucess, setSucess] = useState('');
    // const [error, setError] = useState('')

    const { singInuser } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleOnSubmitForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        singInuser(email, pass)
            .then(result => {
                console.log(result);
                setSucess('Log in sucessfully');
                e.target.reset();
                navigate('/')
            })
            .catch(e => {
                console.log(e)
            })
        //reset error
        // setLoginError('');//error dekhanor por clear hoye jabe
        // setSucess('')
        // signInWithEmailAndPassword(auth, email, pass)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         console.log(user)
        //         setSucess('Log in sucessfully');
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         setError(errorCode, errorMessage)
        //     });

    }


    return (
        <section className="">
            <div className="w-[700px] mx-auto mt-[5rem]">
                <form onSubmit={handleOnSubmitForm}>
                    <input type="email" name="email" className="p-4 rounded-lg w-full mt-4" placeholder="Email" />
                    <input type="password" name="password" className="rounded-lg p-4 w-full mt-4" placeholder="Password" />
                    <input type="submit" className="btn btn-neutral w-full mt-4" />
                </form>
                {/* <div>
                    <button className="btn btn-outline">Default</button>
                    <button className="btn btn-outline btn-primary">Primary</button>
                </div> */}
                <div className="text-center p-4 text-red-600 text-xl font-semibold">
                    {/* {loginError}
                    <div>
                        {error}
                    </div> */}
                    <div>
                        {sucess}
                    </div>
                </div>
            </div>

        </section >
    );
};

export default LogIn;