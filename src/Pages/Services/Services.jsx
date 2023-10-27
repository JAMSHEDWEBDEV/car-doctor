import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center my-8">
                <h1 className="text-red-600 font-bold text-xl">Service</h1>
                <h2 className="text-6xl font-bold">Our Service Area</h2>
                <p className="my-5">the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    services.map(service => <ServiceCard
                         key={service._id} 
                         service={service}
                         ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;