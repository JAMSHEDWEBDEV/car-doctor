
import logo_img from '../../assets/logo.svg';
import { AiFillGoogleCircle,AiFillTwitterCircle,AiFillInstagram,AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#151515] text-base-content">
            <aside>
                <img src={logo_img} className="" alt="logo" />
                <p className='text-white'>Edwin Diaz is a software and web <br></br> technologies engineer, a life coach <br></br> trainer who is also a serial .</p>
                <div className='text-white flex gap-3 text-2xl'>
                    <a className='hover:text-red-600' href="#"><AiFillGoogleCircle/></a>
                    <a className='hover:text-red-600' href="#"><AiFillTwitterCircle/></a>
                    <a className='hover:text-red-600' href="#"><AiFillInstagram/></a>
                    <a className='hover:text-red-600' href="#"><AiFillLinkedin/></a>
                </div>
            </aside>
            <nav>
                <header className="footer-title text-white">About</header>
                <a className="link link-hover text-[#F3F3F3]">Home</a>
                <a className="link link-hover text-[#F3F3F3]">Service</a>
                <a className="link link-hover text-[#F3F3F3]">Contact</a>
            </nav>
            <nav>
                <header className="footer-title text-white">Company</header>
                <a className="link link-hover text-[#F3F3F3]">Why Car Doctor</a>
                <a className="link link-hover text-[#F3F3F3]">About</a>
            </nav>
            <nav>
                <header className="text-white footer-title">Support</header>
                <a className="link link-hover text-[#F3F3F3]">Support Center</a>
                <a className="link link-hover text-[#F3F3F3]">Feedback</a>
                <a className="link link-hover text-[#F3F3F3]">Accesbility</a>
            </nav>
        </footer>
    );
};

export default Footer;