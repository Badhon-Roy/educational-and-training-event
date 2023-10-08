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

        </div>
    );
};

export default Home;