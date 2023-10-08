import { MdLocationPin, MdLocalPhone, MdOutlineMail } from 'react-icons/md';
const Contact = () => {
    return (
        <div className="">
            <h2 className="text-center text-4xl font-bold my-8">Contact us</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">

                <div>
                    <a href="#" className="flex flex-col md:md:items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 ">
                        <img className="object-cover h-[250px] md:h-[200px] w-full rounded-t-lg md:w-1/3 md:rounded-none md:rounded-l-lg" src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/location_image_1.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                London</h5>
                            <p className="mb-3 text-gray-700 flex gap-3"><MdLocationPin className='text-xl'></MdLocationPin> Ubroekweg 26, 5928 NM Venlo The London.</p>
                            <p className='mb-3 text-gray-700 flex gap-3'><MdLocalPhone className='text-xl'></MdLocalPhone> +31(0)77 472 3683</p>
                            <p className='mb-3 text-gray-700 flex gap-3'><MdOutlineMail className='text-xl'></MdOutlineMail> info@eventplace.com</p>

                        </div>
                    </a>
                </div>
                <div>
                    <a href="#" className="flex flex-col md:items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 ">
                        <img className=" h-[250px] md:h-[200px] w-full rounded-t-lg md:w-1/3 md:rounded-none md:rounded-l-lg" src="https://demo.themewinter.com/wp/eventplace/wp-content/uploads/2022/12/location_image_3.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                New York</h5>
                            <p className="mb-3 text-gray-700 flex gap-3"><MdLocationPin className='text-xl'></MdLocationPin>  Clock Tower, 29, 347 YN New York</p>
                            <p className='mb-3 text-gray-700 flex gap-3'><MdLocalPhone className='text-xl'></MdLocalPhone> +85(0)73 632 7845</p>
                            <p className='mb-3 text-gray-700 flex gap-3'><MdOutlineMail className='text-xl'></MdOutlineMail> info@eventplace.com</p>

                        </div>
                    </a>
                </div>
                <div>
                    <a href="#" className="flex flex-col md:items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 ">
                        <img className="object-cover h-[250px] md:h-[200px] w-full rounded-t-lg md:w-1/3 md:rounded-none md:rounded-l-lg" src="https://storage.amari.com/property/dhaka/hotel_4share.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                Dhaka</h5>
                            <p className="mb-3 text-gray-700 flex gap-3"><MdLocationPin className='text-xl'></MdLocationPin> 23/9 Mirpur Dhaka</p>
                            <p className='mb-3 text-gray-700 flex gap-3'><MdLocalPhone className='text-xl'></MdLocalPhone> +31(0)77 472 3683</p>
                            <p className='mb-3 text-gray-700 flex gap-3'><MdOutlineMail className='text-xl'></MdOutlineMail> info@eventplace.com</p>

                        </div>
                    </a>
                </div>
                <div>
                    <a href="#" className="flex flex-col md:items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 ">
                        <img className="object-cover h-[250px] md:h-[200px] w-full rounded-t-lg md:w-1/3 md:rounded-none md:rounded-l-lg" src="https://tinyurl.com/y8kxz52s" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                New Delhi</h5>
                            <p className="mb-3 text-gray-700 flex gap-3"><MdLocationPin className='text-xl'></MdLocationPin>  26, 5928  The Delhi.</p>
                            <p className='mb-3 text-gray-700 flex gap-3'><MdLocalPhone className='text-xl'></MdLocalPhone> +31(0)77 472 3683</p>
                            <p className='mb-3 text-gray-700 flex gap-3'><MdOutlineMail className='text-xl'></MdOutlineMail> info@eventplace.com</p>

                        </div>
                    </a>
                </div>

            </div>

            <div className='bg-white my-8 md:p-16 p-8 shadow-lg rounded'>
                <h3 className='text-4xl font-bold mb-8'>How Can We Help</h3>
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
                    <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="repeat_password" id="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea name="" id="" cols="30" rows="10" required placeholder='massage' className="block p-8  mt-4 py-2.5 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;