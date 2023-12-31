

const MyBookings = ({ booking,handleDelete,handleUpdate }) => {

    const { _id, customerName, customerEmail, image, service, productPrice, BookingDate,status } = booking || {};

    return (
        <div className="flex justify-center">
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customerName}</div>
                            <div>{service}</div>
                            <div>{productPrice}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <h1>{customerEmail}</h1>
                </td>
                <td>
                    <h1>{BookingDate}</h1>
                </td>
                <th>
                {
                    status === 'confirm'? <button className="font-bold">confirmed</button>  : <button 
                    onClick={()=>handleUpdate(_id)}
                    className="btn btn-outline"
                    >Please Confirm</button>
                }
                </th>
            </tr>
        </div>
    );
};

export default MyBookings;