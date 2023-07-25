import image from "../images/Picture1.png";

const Hero = () => {
  return (
    <div className="flex flex-col flex-1">
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>
    </div>
  );
};

export default Hero;
