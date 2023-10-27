
import { Link } from 'react-router-dom';
import img1 from '../../assets/login/login.svg';
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
       
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-full px-5 lg:w-1/2 lg:text-left mr-16">
                    <img src={img1} alt="login_img" />
                </div>
                <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center my-7">SignUp now!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:text-black bg-red-600 text-white">Sign Up</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p className='mb-3'>Or Sign Up with</p>
                        <Link><button className='text-4xl mr-5'><AiFillGoogleCircle /></button></Link>
                        <Link><button className='text-4xl'><AiFillFacebook /></button></Link>
                        <p className='mb-3'>Already have an account? <Link to="/login" className='text-red-600 text-xl font-bold ml-2'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;