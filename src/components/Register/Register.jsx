/* eslint-disable react/no-unescaped-entities */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../Firbase/Firbase_int";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const Register = () => {
    const [registerError, SetRegisterError] = useState('') // error message
    const [success, setSuccess] = useState('')  // success message
    const [showPassword, setShowPassword] = useState(false) // show password statet
    // onSubmit Handelr 
    const handleRegister = e => {
        e.preventDefault();
        console.log("reagister from")
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked // checkBox ar jono Checked
        //resetError
        SetRegisterError('');
        setSuccess('')
        //create user firbease
        console.log(email, "pass =>", password ,accepted)
        if (password.length < 6) {
            SetRegisterError('Please last 6 characters of longer ');
            return;
        }
        //upperCase 
        else if (!/[A-Z]/.test(password)) {
            SetRegisterError('Your password should have at least one upprcase characters.')
            return
        }else if (!accepted) {
            SetRegisterError('Please accept our terms and conditions !')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Created success')
            })
            .catch(error => {
                console.error(error)
                SetRegisterError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-10">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    required
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        required
                                        type={showPassword ? "text" : "password"} // steat change condition
                                        placeholder="password"
                                        name="password"
                                        className="input input-bordered w-full" />
                                    {/* show PassWord condision And Dinamic icon */}
                                    <span className="text-xl absolute top-1/3 left-[85%] bottom-0 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <AiFillEyeInvisible /> : <AiFillEye />
                                        }
                                    </span>
                                </div>
                                <br />
                                <div>
                                    <input className="mr-2" type="checkbox" name="terms" id="terms" />
                                    <label htmlFor="terms">Accept our <a href="#" className="text-primary hover:underline">Terms amd Conditions</a></label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-600">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-700">{success}</p>
                        }
                    </div>
                </div>
                <div className="flex gap-5">
                    <p>Don't have account?</p>
                    <Link to={"/login"}>
                        <button className=" abel-text-alt link link-hover text-primary hover:text-success">
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;