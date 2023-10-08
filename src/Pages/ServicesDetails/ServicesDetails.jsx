import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const ServicesDetails = () => {
    const service = useLoaderData();
    const { name, image, description, price } = service;
    console.log(service);
    return (
        
        <div className="mt-8 md:mb-32 mb-8">
            <img className="md:h-[70vh] w-full" src={image} alt="" />
            <h2 className="md:text-5xl text-3xl font-bold mt-8 mb-4">{name}</h2>
            <p className="md:text-2xl text-xl mb-3">{description}</p>
            <p className="text-2xl font-semibold">Price : ${price}</p>
            <div className="flex justify-end">
                <Link to='/'>
                    <button className="btn transform translate-x-0 transition-transform ease-in-out duration-300 hover:-translate-x-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 hover:from-green-500 hover:to-blue-500">Back Home <FaArrowLeft /> </button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDetails;