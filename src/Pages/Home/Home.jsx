import "react-responsive-carousel/lib/styles/carousel.min.css";
import Services from './Services';
import Photographers from './Photographers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
const Home = () => {

    return (
        <div>
            <div >
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation
                >
                    <SwiperSlide>
                        <div   className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://6-pence.com/wp-content/uploads/2023/08/employee-training-and-development.webp")'  }}>
                            <div className="w-3/4 mx-auto flex flex-col text-center justify-center items-end h-full">
                                <h2 className="text-2xl md:text-4xl text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">Training Events That Inspire Growth</h2>
                                <p className="text-white md:text-xl md:font-bold">Training events that inspire growth are educational experiences designed to help individuals and organizations develop new skills, gain knowledge, and foster personal and professional growth.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:h-[80vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://www.uni-corvinus.hu/contents/uploads/2023/07/iStock-1143287641-2.jpg")' }}>
                            <div className="container mx-auto flex flex-col justify-center h-full">
                                <h2 className="text-4xl md:text-7xl text-center py-8 text-white">Training Events That Inspire Growth</h2>
                                <p className="text-white text-center md:w-2/3 mx-auto">Training events that inspire growth are educational experiences designed to help individuals and organizations develop new skills, gain knowledge, and foster personal and professional growth. These events can take various forms, including workshops, seminars, conferences, webinars, and online courses.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:h-[80vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://guidebook.com/mobile-guides/wp-content/uploads/2021/01/event-planning3-edited.jpg")' }}>
                            <div className="container mx-auto flex flex-col justify-center h-full">
                                <h2 className="text-4xl md:text-7xl text-center py-8 text-white">Training Events That Inspire Growth</h2>
                                <p className="text-white text-center md:w-2/3 mx-auto">Training events that inspire growth are educational experiences designed to help individuals and organizations develop new skills, gain knowledge, and foster personal and professional growth. These events can take various forms, including workshops, seminars, conferences, webinars, and online courses.</p>
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
                    <img src="https://media.istockphoto.com/id/1312139041/photo/learning-on-the-job.jpg?s=612x612&w=0&k=20&c=KmGoZhp92ukKgYCtxulX9yViM1aQTtYtq-pvLr7Q2TA=" alt="" />
                </div>
                <div className="flex-1">
                    <h2 className="md:text-4xl text-2xl font-bold mt-4"><span className="text-orange-500">Unforgettable</span> educational training program events</h2>
                    <p className="text-xl my-4">Educational training programs and events are organized to provide participants with knowledge, skills, and experiences that can enhance their personal and professional development. These events can cover a wide range of topics and are designed to be informative, engaging, and memorable. </p>
                </div>
            </div>
            <div>
                <Photographers></Photographers>
            </div>

        </div>
    );
};

export default Home;