import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {userLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const hendelLogin = (e) => {
        e.preventDefault()
        // console.log(e.target.email.value);
        const form = new FormData(e.target)

        const email = form.get("email")
        const password = form.get("password")

        console.log(email, password);

        userLogin(email,password)
        .then(res=>{
            console.log(res)

            navigate(location?.state ? location.state : "/")

        })
        .catch(err => console.error(err))

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <div className=" bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-6/12 bg-base-100">
                            <div className=" lg:text-left py-10 mx-8 border-b">
                                <h1 className="text-center text-4xl font-bold">Login your account</h1>
                            </div>
                            <form onSubmit={hendelLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email address" className=" px-2 py-3 border outline-0 bg-[#F3F3F3] focus:outline-1" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" required placeholder="Enter your password" className="px-2 py-3 border outline-0	bg-[#F3F3F3] focus:outline-1" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="text-center pt-4">
                                <p>Do not Have An Account ? <Link to="/register" className="text-red-600">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;