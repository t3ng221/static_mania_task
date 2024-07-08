import Image1 from "../assets/image1.png"; // Adjust the path accordingly
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";

const About = () => {
  return (
    <div className="relative min-h-screen  bg-green-900 text-white flex items-center justify-center px-6">
      <div className="absolute top-10 left-0 w-1/3 h-1/3">
        <img
          src={Image1}
          alt="Cozy"
          className="w-full h-full object-cover rounded-tl-3xl opacity-50"
        />
      </div>
      <div className="absolute top-10 right-0 w-1/3 h-1/3">
        <img
          src={Image2}
          alt="Cozy"
          className="w-full h-full object-cover rounded-tr-3xl opacity-50 "
        />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3">
        <img
          src={Image3}
          alt="Cozy"
          className="w-full h-full object-cover rounded-bl-3xl  opacity-50"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3">
        <img
          src={Image4}
          alt="Cozy"
          className="w-full h-full object-cover rounded-br-3xl  opacity-50"
        />
      </div>
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-green-400 text-xl font-bold mb-2">ABOUT US</h1>
        <p className="text-4xl font-thin opacity-75 mb-4">
          At The Wilderness Retreat, We Pride Ourselves On Offering A{" "}
          <span className="font-semibold opacity-100">Peaceful, Serene</span>{" "}
          Atmosphere That Allows Our Guests To Truly{" "}
          <span className="font-semibold opacity-100">
            Disconnect From The Stresses
          </span>{" "}
          Of Everyday Life.
        </p>
        <p className="text-4xl font-thin opacity-75 mb-4">
          Whether You Want To Spend Your Days{" "}
          <span className="font-semibold opacity-100">
            Exploring The Nearby Trails
          </span>
          ,{" "}
          <span className="font-semibold opacity-100">
            Fishing In The Nearby Stream
          </span>
          , Or Simply{" "}
          <span className="font-semibold opacity-100">
            Soaking In The Hot Tub
          </span>{" "}
          As You Take In The Beauty Of Your Surroundings.
        </p>
        <div className="mt-8"></div>
      </div>
    </div>
  );
};

export default About;
