import TreeImage from "../assets/tree.png";
const Tree = () => {
  return (
    <div
      style={{ backgroundImage: `url(${TreeImage})` }}
      className="h-screen w-full object-cover bg-cover bg-center"
    ></div>
  );
};

export default Tree;
