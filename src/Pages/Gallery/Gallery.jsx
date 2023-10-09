import { useEffect, useState } from "react";
import Picture from "./Picture";
import AOS from 'aos';

const Gallery = () => {
    const [pictures, setPictures] = useState([])
    useEffect(() => {
        fetch('Gallery.json')
            .then(res => res.json())
            .then(data => setPictures(data))
    }, [])
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div>
            <div className="mb-16 my-8"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <p className="text-4xl text-center mb-3 caveat-font font-semibold text-[#fe2d7b]">welcome</p>
                <h2 className="text-4xl font-bold text-center">To our <span className="text-orange-500">Gallery</span></h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 my-16">
                {
                    pictures.map(picture => <Picture key={picture.id} picture={picture}></Picture>)
                }

            </div>

        </div>
    );
};

export default Gallery;