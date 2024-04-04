// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import auth from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const [loginError, setLoginError] = useState('')//by default kono error thakbena
    const [sucess, setSucess] = useState('')
    const { cresteUser } = useContext(AuthContext)


    const handleOnSubmitForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;


        //reset error
        setLoginError('');//error dekhanor por clear hoye jabe
        setSucess('')

        // console.log(cresteUser)

        cresteUser(email, pass)
            .then(result => {
                console.log(result.user)
            })
            .catch(e => {
                console.log(e)
            })


        // createUserWithEmailAndPassword(auth, email, pass)
        //     .then((result) => {
        //         // Signed up 
        //         const user = result.user;
        //         setSucess('User Create Sucessfully');
        //         //send verification email
        //         sendEmailVerification(user)
        //             .then(() => {
        //                 // Email verification sent!
        //                 alert('please check your email=> spam')
        //             });
        //     })
        //     .catch((error) => {
        //         // const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // console.log(errorMessage)
        //         setLoginError(errorMessage)
        //     });
    }


    return (
        <section className="mt-[5rem]">
            <div className=" text-center text-4xl font-bold">
                <h2>Register Here</h2>
            </div>
            <div className="w-[700px] mx-auto mt-[5px]">
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
                    {loginError}
                    <div className="text-green-800"> {sucess}</div>
                </div>
            </div>

        </section >
    );
};

export default Register;