
import carousel_img1 from '../../assets/homeCarousel/1.jpg';
import carousel_img2 from '../../assets/homeCarousel/2.jpg';
import carousel_img3 from '../../assets/homeCarousel/3.jpg';
import carousel_img4 from '../../assets/homeCarousel/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] my-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={carousel_img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='w-full lg:w-1/2 px-8 lg:pl-12 space-y-5'>
                        <h1 className='text-3xl lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='my-5 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-600 border-transparent mr-5 font-bold text-white hover:text-black'>Discover More</button>
                        <button className='btn btn-outline border-blue-700 text-white font-bold'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle  bg-red-600 border-transparent text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={carousel_img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='w-full lg:w-1/2 px-8 lg:pl-12 space-y-5'>
                        <h1 className='text-3xl lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='my-5 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-600 border-transparent mr-5 font-bold text-white hover:text-black'>Discover More</button>
                        <button className='btn btn-outline border-blue-700 text-white font-bold'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle  bg-red-600 border-transparent text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={carousel_img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='w-full lg:w-1/2 px-8 lg:pl-12 space-y-5'>
                        <h1 className='text-3xl lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='my-5 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-600 border-transparent mr-5 font-bold text-white hover:text-black'>Discover More</button>
                        <button className='btn btn-outline border-blue-700 text-white font-bold'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle  bg-red-600 border-transparent text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={carousel_img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='w-full lg:w-1/2 px-8 lg:pl-12 space-y-5'>
                        <h1 className='text-3xl lg:text-6xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='my-5 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-red-600 border-transparent mr-5 font-bold text-white hover:text-black'>Discover More</button>
                        <button className='btn btn-outline border-blue-700 text-white font-bold'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-red-600 border-transparent text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;