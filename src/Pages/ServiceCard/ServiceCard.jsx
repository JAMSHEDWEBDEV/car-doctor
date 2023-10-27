
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service || {};

    return (
        <div>
            <div className="card h-[300px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                    <div className='px-10'>
                        <h2 className='text-3xl font-bold my-5'>{title}</h2>
                        <div className="flex justify-between items-center mb-7">
                            <h2 className="text-xl font-bold text-red-600">Price: ${price}</h2>
                            <Link to={`/checkOut/${_id}`}><button className="text-xl text-red-600"><AiOutlineArrowRight /></button></Link>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ServiceCard;