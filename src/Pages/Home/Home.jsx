import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Services from './Services';
import "./Home.css"
const Home = () => {
    return (
        <div>
            <div >
                <Carousel   showArrows={true}>
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

        </div>
    );
};

export default Home;