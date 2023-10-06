import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.email.value;
        const imgae = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password , name , imgae);
        
    }
    return (
        <div className="bg-base-200">
            <div className="md:w-2/4 mx-auto py-20 px-4">
                <div>
                    <h1 className="text-5xl font-bold text-center mb-8">Please Register</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl mt-2">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl mt-2">Image URL</span>
                                </label>
                                <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl mt-2">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl mt-2">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary text-xl text-white">Login</button>
                            </div>
                        </form>
                        <p>You have an account? <Link to="/login"> <span  className="text-blue-600 font-bold cursor-pointer text-[18px]">Login</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;