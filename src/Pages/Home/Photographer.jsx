
import PropTypes from 'prop-types'


import {FaFacebookF ,FaTwitter ,FaInstagramSquare } from 'react-icons/fa';

const Photographer = ({photographer}) => {
    const {image , name , position} = photographer;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img className="rounded-full p-8" src={image} alt="photographer" /></figure>
        <div className="text-center">
          <h2 className="md:text-2xl text-xl font-semibold">{name}</h2>
          <p className="md:text-[18px]">{position}</p>
          <div className='flex justify-center items-center gap-3 my-4 text-xl'>
            <span className='text-[#3b5999] cursor-pointer'><FaFacebookF></FaFacebookF></span>
            <span className='text-[#55acee] cursor-pointer'><FaTwitter></FaTwitter></span>
            <span className='text-[#f3a9b7] cursor-pointer'><FaInstagramSquare></FaInstagramSquare></span>
          </div>
        </div>
      </div>
    );
};
Photographer.propTypes = {
    photographer : PropTypes.object
}

export default Photographer;