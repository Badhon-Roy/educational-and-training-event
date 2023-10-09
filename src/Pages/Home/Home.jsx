import "react-responsive-carousel/lib/styles/carousel.min.css";
import Services from './Services';
import Photographers from './Photographers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import Clients from "./Clients";
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div>
            <div >
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation
                >
                    <SwiperSlide>
                        <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://6-pence.com/wp-content/uploads/2023/08/employee-training-and-development.webp")' }}>
                            <div className=" bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                                <div>
                                    <h2 className="text-2xl md:text-4xl text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">
                                        <TypeAnimation
                                            sequence={[
                                                'Training Events That Inspire Growth.',
                                                1000,
                                            ]}
                                            speed={75}
                                        />
                                    </h2>
                                    <p className="text-white md:text-xl md:font-bold">Training events that inspire growth are educational experiences designed to help individuals and organizations develop new skills, gain knowledge, and foster personal and professional growth.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://www.uni-corvinus.hu/contents/uploads/2023/07/iStock-1143287641-2.jpg")' }}>
                            <div className="bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                                <div>
                                    <h2 className="text-2xl md:text-4xl text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">Training Events That Inspire Growth</h2>
                                    <p className="text-white md:text-xl md:font-bold">Training events that inspire growth are educational experiences designed to help individuals and organizations develop new skills, gain knowledge, and foster personal and professional growth.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://guidebook.com/mobile-guides/wp-content/uploads/2021/01/event-planning3-edited.jpg")' }}>
                            <div className="bg-[rgba(0,0,0,0.4)] flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                                <div>
                                    <h2 className="text-2xl md:text-4xl text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">Training Events That Inspire Growth</h2>
                                    <p className="text-white md:text-xl md:font-bold">Training events that inspire growth are educational experiences designed to help individuals and organizations develop new skills, gain knowledge, and foster personal and professional growth.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <Services></Services>
            </div>
            <div className="md:flex justify-between gap-4 items-center md:my-32">
                <div className="flex-1">
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src="https://media.istockphoto.com/id/1312139041/photo/learning-on-the-job.jpg?s=612x612&w=0&k=20&c=KmGoZhp92ukKgYCtxulX9yViM1aQTtYtq-pvLr7Q2TA=" alt="" />
                    </div>
                </div>
                <div className="flex-1">
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h2 className="md:text-4xl text-2xl font-bold mt-4"><span className="text-orange-500">Unforgettable</span> educational training program events</h2>
                        <p className="text-xl my-4">Educational training programs and events are organized to provide participants with knowledge, skills, and experiences that can enhance their personal and professional development. These events can cover a wide range of topics and are designed to be informative, engaging, and memorable. </p>
                    </div>
                </div>
            </div>
            <div>
                <Photographers></Photographers>
            </div>
            <div>
                <Clients></Clients>
            </div>

        </div>
    );
};

export default Home;