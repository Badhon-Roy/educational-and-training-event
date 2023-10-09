import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h2 className="md:text-4xl text-2xl text-center font-semibold md:mt-32 mt-16 md:mb-16 mb-8" >Our Services <span className="w-[60px] mt-1P h-[5px]  mx-auto border-b-[5px] block border-orange-500"></span> </h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-16">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;