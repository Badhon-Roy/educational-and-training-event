import { useLoaderData } from "react-router-dom";


const ServicesDetails = () => {
    const service = useLoaderData();
    const { name , image , description , price} = service;
    console.log(service);
    return (
        <div className="mt-8 md:mb-32 mb-8">
            <img className="h-[70vh] w-full" src={image} alt="" />
            <h2 className="md:text-5xl text-3xl font-bold mt-8 mb-4">{name}</h2>
            <p className="md:text-2xl text-xl mb-3">{description}</p>
            <p className="text-2xl font-semibold">Price : ${price}</p>
        </div>
    );
};

export default ServicesDetails;