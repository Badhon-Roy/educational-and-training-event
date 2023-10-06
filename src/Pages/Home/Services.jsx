import { useEffect, useState } from "react";
import Course from "./Course";


const Services = () => {
    const [courses , setCourses] = useState([])
    useEffect(()=>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[])
    return (
        <div>
            <h2 className="md:text-4xl text-2xl text-center font-semibold md:mt-32 mt-16 md:mb-16 mb-8" >Our Services</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mb-16">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course> )
                }
            </div>
        </div>
    );
};

export default Services;