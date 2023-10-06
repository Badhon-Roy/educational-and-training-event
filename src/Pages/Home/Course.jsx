
import PropTypes from 'prop-types'



const Course = ({ course }) => {
    const { name  , image , description , price} = course;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full h-[250px]' src={image} alt="course" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold">{name}</h2>
                    <p className='text-[18px]'>{description}</p>
                    <p className='text-2xl font-medium'>${price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-secondary transition delay-200 ease-in">See details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Course.propTypes = {
    course : PropTypes.object
}
export default Course;