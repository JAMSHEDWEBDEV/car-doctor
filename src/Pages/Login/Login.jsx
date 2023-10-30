
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login/login.svg';
import { AiFillGoogleCircle,AiFillFacebook} from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const Login = () => {
    const {signInUser,googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      
        signInUser(email,password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = { email };
            // get access token start
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
             .then(res =>{
                console.log(res.data);
                if(res.data.success){
                   navigate(location?.state? location.state : '/');
                }
             }) 
             .catch(error =>{
                console.error(error);
             })

        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
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
                    <img src={img} alt="login_img" />
                </div>
                <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center my-7">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn hover:text-black bg-red-600 text-white">Sign In</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p className='mb-3'>Or Sign In with</p>
                        <Link><button onClick={handleGoogleSignIn} className='text-4xl mr-5'><AiFillGoogleCircle/></button></Link>
                        <Link><button className='text-4xl'><AiFillFacebook/></button></Link>
                        <p className='mb-3'>New User ? <Link
                        to="/signUp" className='text-red-600 text-xl font-bold ml-2'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;