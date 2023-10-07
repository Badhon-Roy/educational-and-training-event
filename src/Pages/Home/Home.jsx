import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Services from './Services';
import "./Home.css"
import Photographers from './Photographers';
const Home = () => {
    return (
        <div>
            <div >
                <Carousel showArrows={true}>
                    <div>
                        <img className="h-auto w-full" src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-3.jpg" />
                    </div>
                    <div>
                        <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-12.jpg" />
                    </div>
                    <div>
                        <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-12.jpg" />
                    </div>
                </Carousel>
            </div>
            <div></div>
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
            <div className="mt-32 mb-8" style={{ background: 'url("https://images.idgesg.net/images/article/2017/08/smartphone_laptop_typing_by_startup_stock_photos_cc0_via_pexels-100731210-large.jpg?auto=webp&quality=85,70")', backgroundRepeat: 'no-repeat' }}>
                <div className="md:flex md:p-16 p-8 md:w-3/4  mx-auto">
                    <div className="bg-green-400 flex-1 p-8">
                        <h3 className="text-5xl font-bold text-center md:py-20"> Contact US</h3>
                    </div>
                    <div className="flex-1 bg-white p-8">

                        <div>
                            <form>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="password" name="repeat_password" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;