import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Header = () => {
  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        showArrows={false}          
        showStatus={false}          
        showIndicators={false}      
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={1000}
        className="rounded-lg overflow-hidden"
     
        style={{ height: "16rem" }}
      >

        {/* Slide 1 */}
        <div className="relative h-[80vh]">
          <img
            src='https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Advanced Medical Services
            </h1>
            <p className="text-sm md:text-base text-center mb-4">
              Access cutting-edge technology for your health needs.
            </p>
            <a
              href="#Speciality"
              className="px-4 py-2 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition-all text-sm md:text-base"
            >
              Explore Services
            </a>
          </div>
        </div>
        

        {/* Slide 2 */}
        <div className="relative h-[80vh]">
          <img
            src='https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvc3BpdGFsfGVufDB8fDB8fHww'
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Book Appointments Easily
            </h1>
            <p className="text-sm md:text-base text-center mb-4">
              Browse our list of trusted doctors and schedule with ease.
            </p>
            <a
              href="#speciality"
              className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-all text-sm md:text-base"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[80vh]">
          <img
            src='https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Exceptional Healthcare
            </h1>
            <p className="text-sm md:text-base text-center mb-4">
              Delivering trusted care with a compassionate approach.
            </p>
            <a
              href="#speciality"
              className="px-4 py-2 bg-green-500 rounded-full text-white hover:bg-green-600 transition-all text-sm md:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
       
      </Carousel>
    </div>
  );
};

export default Header;
