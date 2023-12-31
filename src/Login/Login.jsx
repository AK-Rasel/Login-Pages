import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left mb-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <from className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </from>
                <div className="flex
                 gap-3">
                    <p>already have an account !</p>
                    <Link to={"/register"}>
                        <button className=" abel-text-alt link link-hover text-primary hover:text-success">
                        Login here...
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;