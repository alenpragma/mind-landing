import roadmap from "../../assets/icon/our-roadmap/timelinered.svg";
import arrow from "../../assets/icon/our-roadmap/Arrow.svg";
import Container from "../../components/container/Container";
import Heading from "../../components/container/reusbleComponent/Heading";

const OurRoadMap = () => {
  return (
    <Container className="mb-[100px]">
      <Heading>Our Road map</Heading>
      <div className="h-[400px] relative">
        <img className="w-full md:block hidden" src={roadmap} alt="" />
        <div className="lg:h-[319px] h-[200px] lg:w-[322px] md:w-[150px] w-full flex flex-col justify-between items-center md:absolute lg:top-[73px] top-7 left-5">
          <div className="w-[72px] lg:h-[50px] h-[72px] relative md:block hidden">
            <div className="size-[25px] rounded-full bg-[#FFBF00] absolute top-0 right-0 left-0 mx-auto z-[999]"></div>
            <img
              src={arrow}
              className="lg:h-[72px] h-[50px] absolute bottom-0 right-0 left-0 top-0 mx-auto"
              alt=""
            />
          </div>
          <div className="md:w-full lg:h-[222px] h-[130px] bg-[#a67c00] rounded-2xl px-[20px] py-[20px] text-center">
            <h2 className="lg:text-[22px] md:text-[16px] text-[22px] font-semibold text-[#FFFFFF]">
              2023-2024
            </h2>
            <p className="text-[#FBFBFB] mt-[10px] lg:text-[16px] md:text-[8px] text-[22px] lg:mt-[31px]">
              Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25%on
              every token purchase
            </p>
          </div>
        </div>
        <div className="lg:h-[319px] h-[200px] lg:w-[322px] md:w-[150px] w-full flex flex-col justify-between items-center md:absolute left-[36.5%] lg:top-6 md:top-2">
          <div className="w-[72px] lg:h-[50px] h-[72px] relative md:block hidden">
            <div className="size-[25px] rounded-full bg-[#FFBF00] absolute top-0 right-0 left-0 mx-auto z-[999]"></div>
            <img
              src={arrow}
              className="lg:h-[72px] h-[50px] absolute bottom-0 right-0 left-0 top-0 mx-auto"
              alt=""
            />
          </div>
          <div className="w-full lg:h-[222px] h-[130px] bg-[#a67c00] rounded-2xl px-[20px] py-[20px] text-center">
            <h2 className="lg:text-[22px] md:text-[16px] text-[22px] font-semibold text-[#FFFFFF]">
              2023-2024
            </h2>
            <p className="text-[#FBFBFB] mt-[10px] lg:text-[16px] md:text-[8px] text-[16px] lg:mt-[31px]">
              Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25%on
              every token purchase
            </p>
          </div>
        </div>
        <div className="lg:h-[319px] h-[200px] lg:w-[322px] md:w-[150px] w-full flex flex-col justify-between items-center md:absolute lg:right-24 md:right-12 lg:top-20  md:top-[8.5%]">
          <div className="w-[72px] lg:h-[50px] h-[72px] relative md:block hidden">
            <div className="size-[25px] rounded-full bg-[#FFBF00] absolute top-0 right-0 left-0 mx-auto z-[999]"></div>
            <img
              src={arrow}
              className="lg:h-[72px] h-[50px] absolute bottom-0 right-0 left-0 top-0 mx-auto"
              alt=""
            />
          </div>
          <div className="w-full lg:h-[222px] h-[130px] bg-[#a67c00] rounded-2xl px-[20px] py-[20px] text-center">
            <h2 className="lg:text-[22px] md:text-[16px] text-[22px] font-semibold text-[#FFFFFF]">
              2023-2024
            </h2>
            <p className="text-[#FBFBFB] mt-[10px] lg:text-[16px] md:text-[8px] text-[16px] lg:mt-[31px]">
              Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25%on
              every token purchase
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurRoadMap;

{
  /* <div className="h-[319px] w-[322px]  border border-red-500 flex flex-col justify-between items-center absolute bottom-2 left-5">
          <div className="w-[72px] h-[72px] relative">
            <div className="size-[25px] rounded-full bg-[#FFBF00] absolute top-0 right-0 left-0 mx-auto z-[999]"></div>
            <img
              src={arrow}
              className="h-[72px] absolute bottom-0 right-0 left-0 top-0 mx-auto "
              alt=""
            />
          </div>
          <div className="w-full h-[222px] bg-[#a67c00] rounded-2xl px-[43px] py-[49px] text-center">
            <h2 className="text-[22px] font-semibold text-[#FFFFFF]">
              2023-2024
            </h2>
            <p className="text-[#FBFBFB] text-[16px] mt-[31px]">
              Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25%on
              every token purchase
            </p>
          </div>
        </div>
        <div className="h-[319px] w-[322px]  border border-red-500 flex flex-col justify-between items-center absolute left-[36%] top-5">
          <div className="w-[72px] h-[72px] relative border border-green-500">
            <div className="size-[25px] rounded-full bg-[#FFBF00] absolute top-0 right-0 left-0 mx-auto z-[999]"></div>
            <img
              src={arrow}
              className="h-[72px] absolute bottom-0 right-0 left-0 top-0 mx-auto "
              alt=""
            />
          </div>
          <div className="w-full h-[222px] bg-[#a67c00] rounded-2xl px-[43px] py-[49px] text-center">
            <h2 className="text-[22px] font-semibold text-[#FFFFFF]">
              2023-2024
            </h2>
            <p className="text-[#FBFBFB] text-[16px] mt-[31px]">
              Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25%on
              every token purchase
            </p>
          </div>
        </div>
        <div className="h-[319px] w-[322px]  border border-red-500 flex flex-col justify-between items-center absolute right-[90px] bottom-0">
          <div className="w-[72px] h-[72px] relative border border-green-500">
            <div className="size-[25px] rounded-full bg-[#FFBF00] absolute top-0 right-0 left-0 mx-auto z-[999]"></div>
            <img
              src={arrow}
              className="h-[72px] absolute bottom-0 right-0 left-0 top-0 mx-auto "
              alt=""
            />
          </div>
          <div className="w-full h-[222px] bg-[#a67c00] rounded-2xl px-[43px] py-[49px] text-center">
            <h2 className="text-[22px] font-semibold text-[#FFFFFF]">
              2023-2024
            </h2>
            <p className="text-[#FBFBFB] text-[16px] mt-[31px]">
              Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25%on
              every token purchase
            </p>
          </div>
        </div> */
}
