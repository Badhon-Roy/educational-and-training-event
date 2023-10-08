
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';

const Service = ({ service }) => {
    const { name ,id , image , description , price} = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full h-[250px]' src={image} alt="service" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className='font-medium'>{description.slice(0,150)}......</p>
                    <p className='text-xl font-medium'>Price : ${price}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/service/${id}`} ><button className="btn transform -translate-x-8 transition-transform ease-in-out duration-300 hover:translate-x-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 hover:from-green-500 hover:to-blue-500">See details <FaArrowRight/> </button> </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};
Service.propTypes = {
    service : PropTypes.object
}
export default Service;