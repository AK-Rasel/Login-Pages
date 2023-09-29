import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        console.log("reagister from")
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, "pass =>", password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
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
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
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