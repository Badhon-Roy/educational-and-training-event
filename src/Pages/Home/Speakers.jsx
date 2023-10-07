import { useEffect, useState } from "react";
import Speaker from "./Speaker";


const Speakers = () => {
    const [speakers , setSpeakers] = useState([])
    useEffect(()=>{
        fetch('Speakers.json')
        .then(res => res.json())
        .then(data =>setSpeakers(data))
    },[])
    return (
        <div>
            <h2 className="md:text-4xl text-2xl text-center font-semibold md:mt-32 mt-16 md:mb-16 mb-8" >Popular Speakers <span className="w-[60px] mt-1P h-[5px]  mx-auto border-b-[5px] block border-orange-500"></span> </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mb-16">
                {
                    speakers.map(speaker => <Speaker key={speaker.id} speaker={speaker}></Speaker> )
                }
            </div>
        </div>
    );
};

export default Speakers;