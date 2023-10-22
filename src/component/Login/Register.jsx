import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

    const  {createUser} = useContext(AuthContext)
    // console.log(createUser)

    const hendelLogin = (e) => {
        e.preventDefault()
        // console.log(e.target.email.value);
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const PhotoUrl = form.get("Photo_url")
        const password = form.get("password")
        console.log(name,email,PhotoUrl,password)
        // form.reset()

        // creat user
        createUser(email, password)
        .then(res => {
            console.log(res.user)
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
                                <h1 className="text-center text-4xl font-bold">Register</h1>
                            </div>
                            <form onSubmit={hendelLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className=" px-2 py-3 border outline-0 bg-[#F3F3F3] focus:outline-1" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email address" className=" px-2 py-3 border outline-0 bg-[#F3F3F3] focus:outline-1" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name="Photo_url" placeholder="Enter Photo url" className=" px-2 py-3 border outline-0 bg-[#F3F3F3] focus:outline-1" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter your password" className="px-2 py-3 border outline-0	bg-[#F3F3F3] focus:outline-1" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <div className="text-center pt-4">
                                    <p>Alredy have an account? <Link to="/login" className="text-red-600">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;