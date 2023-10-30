import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBookings from "../../components/MyBookings/MyBookings";


const MyCart = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?customerEmail=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data);
            })
    }, [url])

    const handleDelete = id =>{
        const proceed = confirm('Are you sure want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
               })
               .then(res => res.json())
               .then(result =>{
                console.log(result);
                if (result.deletedCount === 1) {
                    alert("Successfully deleted one document.");
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                  } else {
                    alert("No documents matched the query. Deleted 0 documents.");
                  }
               })
        }
      
    }

    const handleUpdate = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const remaining = bookings.filter(booking => booking._id !== id);
              const updated = bookings.find(booking => booking._id === id);
              updated.status = 'confirm';
              const newBookings = [updated,...remaining];
              setBookings(newBookings);

            }
        })
    }

    return (
        <div>
            <div>
                <h1 className="text-3xl text-center font-bold text-red-600"> Total Bookings : {bookings.length}</h1>
            </div>
            <div>
                <table className="table">
                    {/* head */}
                    <tbody className="">
                        {
                            bookings.map(booking => <MyBookings
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></MyBookings>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;