
import { useLoaderData } from 'react-router-dom';
import check_img from '../../assets/checkout/checkout.png';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData({});
    const {user} = useContext(AuthContext);

    const {title,price,img} = service || {};

    const handleOrderServices = e =>{
        e.preventDefault();
        const form = e.target;
        const firstName = form.first_name.value;
        const phoneNumber = form.phone.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;
        const message = form.message.value;
        const booking = {
            customerName: firstName,
            customerPhoneNumber: phoneNumber,
            customerEmail: email,
            BookingDate: date,
            productPrice: price,
            image:img,
            service:title,
            customerMessage: message
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                  'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('your booking successfully. thank you');
            }
        })
    }


    return (
        <div className='my-10'>
            <div className='relative'>
                <img className='w-full' src={check_img} alt="" />
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]] absolute top-0 h-full w-full flex items-center pl-16 font-bold text-3xl text-white'>Check Out/{title}</div>
            </div>
            <div className='my-10'>
                <div className="p-10 bg-base-200">
                    <form onSubmit={handleOrderServices}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name="first_name" defaultValue={user?.displayName} placeholder="your first name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="last_name" placeholder="your last name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input type="number" name="phone" placeholder="your phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="price" name="price" defaultValue={'$ '+price}  className="input input-bordered" required />
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name="message" placeholder='message' id="" cols="157" className='pl-5' rows="10"></textarea>
                        </div>
                        <div>
                            <button className='text-white font-bold py-4 text-xl mt-8 bg-red-600 btn-block rounded-xl'>Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;