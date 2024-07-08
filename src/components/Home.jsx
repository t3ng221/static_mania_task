import cozyImage from "../assets/cozy.png";

const Home = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen text-center text-white bg-[#1B3936]">
      <header className="flex justify-between items-center p-5">
        <ul className="flex gap-4 ml-20">
          <li className="active">
            <a href="#home" className="hover:text-pink-500 text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-500 text-lg">
              About
            </a>
          </li>
        </ul>
        <div className="text-2xl font-bold text-lime-600 ml-20">
          Grindelwald
        </div>
        <nav className="flex justify-between w-full max-w-xs">
          <ul className="flex gap-4 ml-20">
            <li>
              <a href="#cabins" className="hover:text-pink-500 text-lg">
                Cabins
              </a>
            </li>
            <li>
              <a href="#reserve" className="hover:text-pink-500 text-lg">
                Reserve
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center flex-1 p-5 relative">
        <img
          src={cozyImage}
          alt="Cozy"
          className="absolute w-96 h-96 rounded-full opacity-60"
        />
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light italic leading-tight text-center">
            Cosy Cabin <span className=" block text-3xl mt-10">In The </span>
            <span className="block">Woods!</span>
          </h1>
        </div>
      </main>

      <div className="flex justify-center items-center mb-10">
        <p className=" text-xl max-w-lg text-gray-300 ">
          Jack built The Wilderness Retreat because he had always dreamed of
          having a cabin in the wilderness where he could escape the stresses of
          everyday life and reconnect with nature.
        </p>
      </div>
    </div>
  );
};

export default Home;
