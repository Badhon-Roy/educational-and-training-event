
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



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
                    <Link to={`/service/${id}`} ><button className="btn btn-outline btn-secondary transition delay-200 ease-in">See details</button></Link>
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