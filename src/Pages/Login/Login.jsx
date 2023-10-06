import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        
    }

    return (
        <div className="bg-base-200">
            <div className="md:w-2/4 mx-auto py-32 px-4">
                <div>
                    <h1 className="text-5xl font-bold text-center mb-8">Login now!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-xl text-white">Login</button>
                            </div>
                        </form>
                        <p>Do not have an account? <Link to="/register"> <span  className="text-blue-600 font-bold cursor-pointer text-[18px]">Register</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;