import CountUp from 'react-countup';
import { useEffect } from 'react';
import { BsClipboardPlus } from 'react-icons/bs';
import { GrCircleInformation } from 'react-icons/gr';
import { MdPublishedWithChanges, MdOutlineSdCardAlert } from 'react-icons/md';
import 'aos/dist/aos.css'; // Import the CSS
import AOS from 'aos';
const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className="grid md:grid-cols-2 gap-4 md:my-32">
                    <div className="mt-8">
                        <p className="text-4xl mb-3 caveat-font font-semibold text-[#fe2d7b]">welcome</p>
                        <h3 className="text-5xl font-bold">We Inspire People to Go Out More</h3>
                        <p className="text-xl">Influential media, entertainment & technology show inspiratio
                            speaker cluding game changing not just a large scale confere
                            educational hub on digital technologie for business, wher
                            people communicate, inspired find.</p>
                    </div>
                    <div>
                        <img src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2023/02/about_image_1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 my-32">
                <div data-aos="zoom-in">
                    <div className="bg-white flex gap-4 items-center rounded-lg shadow-lg p-12">
                        <img src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/event_organizers.png" alt="" />
                        <div>
                            <h2 className="text-3xl font-bold"> <CountUp start={1} end={60}  duration={5} />K+</h2>
                            <p className="text-xl font-medium">Event Organizers</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in">
                    <div className="bg-white flex gap-4 items-center rounded-lg shadow-lg p-12">
                        <img src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/event_host.png" alt="" />
                        <div>
                            <h2 className="text-3xl font-bold"><CountUp start={1} end={29}  duration={5} />K+</h2>
                            <p className="text-xl font-medium">Event Hosted</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in">
                    <div className="bg-white flex gap-4 items-center rounded-lg shadow-lg p-12">
                        <img src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/tickets.png" alt="" />
                        <div>
                            <h2 className="text-3xl font-bold"><CountUp start={1} decimals={1} end={21.4}  duration={5} />m+</h2>
                            <p className="text-xl font-medium">Tickets Sold</p>
                        </div>
                    </div>
                </div>

            </div>
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className="grid md:grid-cols-2 gap-4 my-32">
                    <div>
                        <img src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/organizer_event_img.png" alt="" />
                    </div>
                    <div className="mt-8">
                        <p className="text-4xl mb-3 caveat-font font-semibold text-[#fe2d7b]">Organizers</p>
                        <h3 className="text-5xl font-bold">Event Organizers</h3>
                        <p className="text-xl">Influential media, entertainment & technology show inspiratio
                            speaker cluding game changing not just a large scale confere
                            educational hub on digital technologie for business, wher
                            people communicate, inspired find.</p>
                    </div>
                </div>
            </div>
            <div className="my-32">
                <p className="text-4xl text-center mb-3 caveat-font font-semibold text-[#fe2d7b]">Work Plan</p>
                <h3 className="text-5xl text-center font-bold">Discover How We Work</h3>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
                    <div data-aos="zoom-in-up" className='relative group'>
                        <div className="bg-white text-center rounded-lg shadow-lg p-12 transition-transform transform scale-100 group-hover:scale-110 duration-300">
                            <span className='inline-block justify-center text-2xl p-4  rounded-full border-2 border-gray-500'>
                                <BsClipboardPlus></BsClipboardPlus>
                            </span>
                            <h2 className="text-2xl font-bold">Add Your Event</h2>
                            <p className="text-xl font-medium">Accept challenges. Seek feedback.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className='relative group'>
                        <div className="bg-white text-center rounded-lg shadow-lg p-12 transition-transform transform scale-100 group-hover:scale-110 duration-300">
                            <span className='inline-block justify-center text-2xl p-4  rounded-full border-2 border-gray-500'>
                                <GrCircleInformation></GrCircleInformation>
                            </span>
                            <h2 className="text-2xl font-bold">Event Information</h2>
                            <p className="text-xl font-medium">Accept challenges. Seek feedback.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className='relative group'>
                        <div className="bg-white text-center rounded-lg shadow-lg p-12 transition-transform transform scale-100 group-hover:scale-110 duration-300">
                            <span className='inline-block justify-center text-2xl p-4  rounded-full border-2 border-gray-500'>
                                <MdPublishedWithChanges></MdPublishedWithChanges>
                            </span>
                            <h2 className="text-2xl font-bold">Publishing</h2>
                            <p className="text-xl font-medium">Accept challenges. Seek feedback.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className='relative group'>
                        <div className="bg-white text-center rounded-lg shadow-lg p-12 transition-transform transform scale-100 group-hover:scale-110 duration-300">
                            <span className='inline-block justify-center text-2xl p-4  rounded-full border-2 border-gray-500 '>
                                <MdOutlineSdCardAlert></MdOutlineSdCardAlert>
                            </span>
                            <h2 className="text-2xl font-bold">Event Alert</h2>
                            <p className="text-xl font-medium">Accept challenges. Seek feedback.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;