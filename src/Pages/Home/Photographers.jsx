import { useEffect, useState } from "react";
import Photographer from "./Photographer";


const Photographers = () => {
    const [photographers , setPhotographers] = useState([])
    useEffect(()=>{
        fetch('Photographers.json')
        .then(res => res.json())
        .then(data =>setPhotographers(data))
    },[])
    return (
        <div>
            <h2 className="md:text-4xl text-2xl text-center font-semibold md:mt-32 mt-16 md:mb-16 mb-8" >Popular Photographer and Video editor <span className="w-[160px] mt-1 h-[5px]  mx-auto border-b-[5px] block border-orange-500"></span> </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mb-16">
                {
                    photographers.map(photographer => <Photographer key={photographer.id} photographer={photographer}></Photographer> )
                }
            </div>
        </div>
    );
};

export default Photographers;