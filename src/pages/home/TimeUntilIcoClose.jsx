import Container from "../../components/container/Container";
import Heading from "../../components/container/reusbleComponent/Heading";

const TimeUntilIcoClose = () => {
  return (
    <div className="bg-[#EEEEEE]">
      <Container className="flex flex-col justify-center items-center py-[140px]">
        <Heading className="border-b-2 border-[#a67c00]">
          Time Until Ico Close
        </Heading>
        <p className="text-[16px] text-[#414141] max-w-[60ch] text-center mt-[24px] mb-[52px]">
          Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 25%on
          every token purchase
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-12">
          <div className="w-[150px] md:w-[200px] lg:w-[241px] flex flex-col rounded-lg">
            <div
              className="py-[18px] bg-[#ffbf00] rounded-t-lg text-center z-10"
              style={{ boxShadow: "#B4B4B8 0px 2px 3px 0px" }}
            >
              <span className="lg:text-[26px] text-[18px] font-medium">
                Month
              </span>
            </div>
            <div className=" py-[18px] rounded-b-lg text-center bg-[#FFFFFF]">
              <span className="lg:text-[26px] text-[18px] font-medium">2</span>
            </div>
          </div>
          <div className="w-[150px] md:w-[200px] lg:w-[241px] flex flex-col rounded-lg">
            <div
              className="py-[18px] bg-[#ffbf00] rounded-t-lg text-center z-10"
              style={{ boxShadow: "#B4B4B8 0px 2px 3px 0px" }}
            >
              <span className="lg:text-[26px] text-[18px] font-medium">
                Day
              </span>
            </div>
            <div className=" py-[18px] bg-[#fff] rounded-b-lg text-center">
              <span className="lg:text-[26px] text-[18px] font-medium">
                223
              </span>
            </div>
          </div>
          <div className="w-[150px] md:w-[200px] lg:w-[241px] flex flex-col rounded-lg">
            <div
              className="py-[18px] bg-[#ffbf00] rounded-t-lg text-center z-10"
              style={{ boxShadow: "#B4B4B8 0px 2px 3px 0px" }}
            >
              <span className="lg:text-[26px] text-[18px] font-medium">
                Hour
              </span>
            </div>
            <div className=" py-[18px] bg-[#fff] rounded-b-lg text-center">
              <span className="lg:text-[26px] text-[18px] font-medium">
                76572
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-[90px]">
          <h2 className="text-[32px] font-bold">Total Token Bought</h2>
          <h1 className="text-[103px] font-bold">71, 145, 100</h1>
        </div>
        <button className="btn btn-orange rounded-full px-[80px] py-[20px] mt-[63px] text-[32px] font-bold">
          Buy Now
        </button>
      </Container>
    </div>
  );
};

export default TimeUntilIcoClose;
