import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import './Clients.css';
import { FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';
const Clients = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
    return (
        <div className='mb-8 client-section' >
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h2 className="md:text-4xl text-2xl text-center font-semibold md:mt-32 mt-16 md:mb-16 mb-8" >Happy Clients<span className="w-[50px] mt-1 h-[5px]  mx-auto border-b-[5px] block border-orange-500"></span> </h2>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><div className="h-auto py-10">
                    <div className="flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                        <div>
                            <div className="avatar ">
                                <div className="md:w-36 w-24 rounded-full shadow-lg">
                                    <img src="https://grammarfactory.com/wp-content/uploads/2022/03/ILE-01-Ian-Lees-Author-Photo.jpg" />
                                </div>
                            </div>
                            <p className="text-white md:text-xl md:font-bold">
                                <BiSolidQuoteAltLeft className="inline-block pr-1 relative -top-3" />
                                Academist Ltd turned our event into a success! The website was user-friendly, and their event management was flawless. Highly recommended
                                <BiSolidQuoteAltRight className="inline-block relative pl-1 -top-3" />
                            </p>
                            <h2 className="text-xl my-3 md:text-2xl text-center lg:text-3xl font-bold mb-4 md:mb-8 text-white">John Smith</h2>
                            <div className='flex justify-center items-center gap-3 my-4 text-2xl'>
                                <span className='text-[#3b5999] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaFacebookF></FaFacebookF></span>
                                <span className='text-[#55acee] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaTwitter></FaTwitter></span>
                                <span className='text-[#f3a9b7] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaInstagramSquare></FaInstagramSquare></span>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>
                <div className="h-auto py-10">
                    <div className="flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                        <div>
                            <div className="avatar ">
                                <div className="md:w-36 w-24 rounded-full shadow-lg">
                                    <img src="https://uploads-ssl.webflow.com/5f998947bc48c23489cf0ca6/61c06142c96368e3041ebd68_joe-optimized.jpeg" />
                                </div>
                            </div>
                            <p className="text-white md:text-xl md:font-bold">
                                <BiSolidQuoteAltLeft className="inline-block pr-1 relative -top-3" />
                                Academist Ltd turned our event into a success! The website was user-friendly, and their event management was flawless. Highly recommended
                                <BiSolidQuoteAltRight className="inline-block relative pl-1 -top-3" />
                            </p>
                            <h2 className="text-xl my-3 md:text-2xl text-center lg:text-3xl font-bold mb-4 md:mb-8 text-white">Kris Woaks</h2>
                            <div className='flex justify-center items-center gap-3 my-4 text-2xl'>
                                <span className='text-[#3b5999] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaFacebookF></FaFacebookF></span>
                                <span className='text-[#55acee] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaTwitter></FaTwitter></span>
                                <span className='text-[#f3a9b7] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaInstagramSquare></FaInstagramSquare></span>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="h-auto py-10">
                    <div className="flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                        <div>
                            <div className="avatar ">
                                <div className="md:w-36 w-24 rounded-full shadow-lg">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIxfxi9H7PsIOaglTI-tfoUMl6ZdrnSGBqCqXEizTaeB8HwSfoliaEJui7TjxvYvMFtw&usqp=CAU" />
                                </div>
                            </div>
                            <p className="text-white md:text-xl md:font-bold">
                                <BiSolidQuoteAltLeft className="inline-block pr-1 relative -top-3" />
                                Academist Ltd turned our event into a success! The website was user-friendly, and their event management was flawless. Highly recommended
                                <BiSolidQuoteAltRight className="inline-block relative pl-1 -top-3" />
                            </p>
                            <h2 className="text-xl my-3 md:text-2xl text-center lg:text-3xl font-bold mb-4 md:mb-8 text-white">Joni Dep</h2>
                            <div className='flex justify-center items-center gap-3 my-4 text-2xl'>
                                <span className='text-[#3b5999] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaFacebookF></FaFacebookF></span>
                                <span className='text-[#55acee] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaTwitter></FaTwitter></span>
                                <span className='text-[#f3a9b7] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaInstagramSquare></FaInstagramSquare></span>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="h-auto py-10">
                    <div className="flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                        <div>
                            <div className="avatar ">
                                <div className="md:w-36 w-24 rounded-full shadow-lg">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-oxysF8w8ICiOQRDcDYZ_wNXOsDkXCBskXXD-YIEysoW2XXr169BTaA3J-ggnwxTeJw&usqp=CAU" />
                                </div>
                            </div>
                            <p className="text-white md:text-xl md:font-bold">
                                <BiSolidQuoteAltLeft className="inline-block pr-1 relative -top-3" />
                                Academist Ltd turned our event into a success! The website was user-friendly, and their event management was flawless. Highly recommended
                                <BiSolidQuoteAltRight className="inline-block relative pl-1 -top-3" />
                            </p>
                            <h2 className="text-xl my-3 md:text-2xl text-center lg:text-3xl font-bold mb-4 md:mb-8 text-white">Jeff Welsh</h2>
                            <div className='flex justify-center items-center gap-3 my-4 text-2xl'>
                                <span className='text-[#3b5999] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaFacebookF></FaFacebookF></span>
                                <span className='text-[#55acee] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaTwitter></FaTwitter></span>
                                <span className='text-[#f3a9b7] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaInstagramSquare></FaInstagramSquare></span>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>
                <div className="h-auto py-10">
                    <div className="flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                        <div>
                            <div className="avatar ">
                                <div className="md:w-36 w-24 rounded-full shadow-lg">
                                    <img src="https://media.licdn.com/dms/image/C4E03AQFWorj1bFLZyA/profile-displayphoto-shrink_800_800/0/1617208977359?e=2147483647&v=beta&t=cxMIV5QtaZS5SlU2pk21Ltrp0rScyq1lzz-48YzY7wY" />
                                </div>
                            </div>
                            <p className="text-white md:text-xl md:font-bold">
                                <BiSolidQuoteAltLeft className="inline-block pr-1 relative -top-3" />
                                Academist Ltd turned our event into a success! The website was user-friendly, and their event management was flawless. Highly recommended
                                <BiSolidQuoteAltRight className="inline-block relative pl-1 -top-3" />
                            </p>
                            <h2 className="text-xl my-3 md:text-2xl text-center lg:text-3xl font-bold mb-4 md:mb-8 text-white">Micheal Perez</h2>
                            <div className='flex justify-center items-center gap-3 my-4 text-2xl'>
                                <span className='text-[#3b5999] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaFacebookF></FaFacebookF></span>
                                <span className='text-[#55acee] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaTwitter></FaTwitter></span>
                                <span className='text-[#f3a9b7] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaInstagramSquare></FaInstagramSquare></span>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="h-auto py-10">
                    <div className="flex justify-center items-center text-center h-full lg:px-32 md:px-16 px-8">
                        <div>
                            <div className="avatar ">
                                <div className="md:w-36 w-24 rounded-full shadow-lg">
                                    <img src="https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg" />
                                </div>
                            </div>
                            <p className="text-white md:text-xl md:font-bold">
                                <BiSolidQuoteAltLeft className="inline-block pr-1 relative -top-3" />
                                Academist Ltd turned our event into a success! The website was user-friendly, and their event management was flawless. Highly recommended
                                <BiSolidQuoteAltRight className="inline-block relative pl-1 -top-3" />
                            </p>
                            <h2 className="text-xl my-3 md:text-2xl text-center lg:text-3xl font-bold mb-4 md:mb-8 text-white">Michel Sentna</h2>
                            <div className='flex justify-center items-center gap-3 my-4 text-2xl'>
                                <span className='text-[#3b5999] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaFacebookF></FaFacebookF></span>
                                <span className='text-[#55acee] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaTwitter></FaTwitter></span>
                                <span className='text-[#f3a9b7] cursor-pointer shadow-lg bg-white p-2 rounded-xl'><FaInstagramSquare></FaInstagramSquare></span>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="">
                    <svg viewBox="0 0 8 8" ref={progressCircle}>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div >
    );
};

export default Clients;