import BackgroundImage from "../assets/bg1.png";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-serif text-white mb-2">
          Sign Up And <span className="text-green-400">Get 10%</span> Off Your
          Stay
        </h1>
        <p className="text-gray-300 mb-8">
          Not boring old news, just updates for our rentals. Take up on our
          offers.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 w-64 rounded-l-lg focus:outline-none"
          />
          <button className="bg-green-400 text-white p-3 rounded-r-lg hover:bg-green-500 focus:outline-none">
            Get 10% Off
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
