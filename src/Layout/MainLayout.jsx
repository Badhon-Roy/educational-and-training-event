import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";


const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <LoadingPage></LoadingPage> :
                    <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-16">
                        <Outlet></Outlet>
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;