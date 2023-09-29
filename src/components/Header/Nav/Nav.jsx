import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="flex justify-between container mx-auto mt-5">
            <div className="navbar bg-base-100">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex gap-5">
                <Link to={"/login"}>
                    <button className="btn btn-primary hover:btn-success">Login</button>
                </Link>
                <Link to={"/register"}>
                    <button className="btn btn-primary hover:btn-success">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Nav;