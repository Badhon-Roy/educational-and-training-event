
import PropTypes from 'prop-types'


const Picture = ({ picture }) => {
    const { image } = picture;
    return (
        <div data-aos="zoom-in-up">
            <div className='relative group'>
                <img className='h-[200px] w-full rounded transition-transform transform scale-100 group-hover:scale-110 duration-300' src={image} alt="" />
            </div>
        </div>
    );
};
Picture.propTypes = {
    picture: PropTypes.object
}

export default Picture;