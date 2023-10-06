import { useRouteError } from "react-router-dom";



const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="min-h-screen">
            <div className="flex justify-center">
                <img className="md:w-1/4 mt-10" src="https://static.vecteezy.com/system/resources/thumbnails/022/310/933/small/404-error-page-not-found-3d-illustration-png.png" alt="" />
            </div>
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Oops!</h1>
                <p className="text-3xl font-medium">Sorry, an unexpected error has occurred.</p>
                <p className="text-xl">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;