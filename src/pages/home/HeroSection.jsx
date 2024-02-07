import backgroundImage from "../../assets/image/hero/background.png";
import side from "../../assets/image/hero/img.png";
import Container from "../../components/container/Container";
const HeroSection = () => {
  return (
    <div className="w-full">
      <div
        className="w-full mx-auto px-5 lg:h-[1100px] h-auto"
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1680px] mx-auto flex flex-col justify-center items-center h-full relative md:py-36 lg:py-0 py-32">
          <div className="flex">
            <div className="flex flex-col items-start flex-1">
              <h2 className="text-[24px] md:text-[48px] lg:text-[64px] font-bold text-[#fff]">
                Innovative Decentralized Finance Solutions.
              </h2>
              <p className="text-[#fff] py-10 text-[18px] pr-8">
                Mindchain reshapes decentralized tech with a bespoke blockchain,
                unlocking boundless potential. Dive into innovation, fortified
                security, and a transformative future within our dynamic
                ecosystem, pioneering possibilities in the decentralized
                landscape.
              </p>
              <button className="btn btn-orange px-[14px] md:px-[70px] lg:px-[98px] lg:py-[30px] py-[20px] md:text-[28px] text-[20px] text-[353535] font-medium">
                Explore
              </button>
            </div>
            <div className="flex-1 md:flex hidden">
              <img className="size-[767px]" src={side} alt="" />
            </div>
          </div>
          <div className="lg:absolute lg:bottom-[69px] bottom-5">
            <h2 className="text-[#fff] font-semibold mg:text-[40px] text-[24px] text-center mb-[46px]">Offer Ends On</h2>
            <div className="flex flex-wrap gap-7">
              <div className="w-[180px] md:w-[200px] lg:w-[241px] flex flex-col rounded-lg">
                <div className="py-[18px] bg-[#ffbf00] rounded-t-lg text-center">
                  <span className="lg:text-[26px] text-[18px] font-medium">Month</span>
                </div>
                <div className=" py-[18px] bg-[#fff] rounded-b-lg text-center">
                  <span className="lg:text-[26px] text-[18px] font-medium">2</span>
                </div>
              </div>
              <div className="w-[180px] md:w-[200px] lg:w-[241px] flex flex-col rounded-lg">
                <div className="py-[18px] bg-[#ffbf00] rounded-t-lg text-center">
                  <span className="lg:text-[26px] text-[18px] font-medium">Day</span>
                </div>
                <div className=" py-[18px] bg-[#fff] rounded-b-lg text-center">
                  <span className="lg:text-[26px] text-[18px] font-medium">120</span>
                </div>
              </div>
              <div className="w-[180px] md:w-[200px] lg:w-[241px] flex flex-col rounded-lg">
                <div className="py-[18px] bg-[#ffbf00] rounded-t-lg text-center">
                  <span className="lg:text-[26px] text-[18px] font-medium">Hour</span>
                </div>
                <div className=" py-[18px] bg-[#fff] rounded-b-lg text-center">
                  <span className="lg:text-[26px] text-[18px] font-medium">2150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
