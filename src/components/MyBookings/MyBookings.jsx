

const MyBookings = ({ booking }) => {

    const { customerName, customerEmail, image, service, productPrice, BookingDate } = booking || {};

    return (
        <div>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
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
                    <button className="btn btn-ghost btn-xs">delete</button>
                </th>
            </tr>
        </div>
    );
};

export default MyBookings;