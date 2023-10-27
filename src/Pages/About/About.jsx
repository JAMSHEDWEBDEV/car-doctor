
import about_img1 from '../../assets/about_us/person.jpg';
import about_img2 from '../../assets/about_us/parts.jpg';

const About = () => {
    return (
        <div className="flex flex-col md:flex-col lg:flex-row gap-10 my-10">
            <div className='relative'>
                <img src={about_img1} className='w-[80%] h-[90%] rounded-xl' alt="person_img"/>
                <img src={about_img2} className='w-1/2 absolute right-0 top-1/2 border-white border-8 rounded-xl' alt="person_img"/>
            </div>
            <div>
                <p className='mb-5 text-red-600 font-bold'>About Us</p>
                <h1 className='mb-5 text-4xl lg:text-6xl font-bold'>We are qualified & of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className='my-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className='btn bg-red-600 font-bold text-white hover:text-black'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;