import Container from "../../components/container/Container";
import MSwap from "../../assets/icon/other-project/MSwap.svg";
import Wallet from "../../assets/icon/other-project/Wallet.svg";
import MINDSmartChain from "../../assets/icon/other-project/MINDSmartChain.svg";
import PerryMind from "../../assets/icon/other-project/PerryMind.svg";
import MINDScan from "../../assets/icon/other-project/MINDScan.svg";
import minePay from "../../assets/icon/other-project/BMINDIcon.svg";
import MAcademy from "../../assets/icon/other-project/MAcademy.svg";
import MUSDIcon from "../../assets/icon/other-project/MUSDIcon.svg";
import MindPay from "../../assets/icon/other-project/MindPay.svg";
import Heading from "../../components/container/reusbleComponent/Heading";

const OurOtherProject = () => {
  return (
    <Container className="py-[128px]">
      <Heading>Our Other Project</Heading>
      <div className="grid grid-cols-12">
        {/* first coloum table start */}
        <div className="md:col-span-4 col-span-6 border-r-2 border-b-2 border-[#FFBF00]">
          <div className="md:my-[22px] my-[16px] flex items-center lg:gap-[61px] md:gap-[32px] gap-5 lg:ml-[106px] md:ml-[40px] ml-5">
            <img className="md:size-[100px] size-[70px]" src={MSwap} alt="" />
            <p className="lg:text-[22px] text-[18px] font-medium">Mine Swap</p>
          </div>
        </div>
        <div className="md:col-span-4 col-span-6 md:border-r-2 border-b-2 border-[#FFBF00]">
          <div className="md:my-[22px] my-[16px] flex items-center lg:gap-[61px] md:gap-[32px] gap-5 lg:ml-[106px] md:ml-[40px] ml-5">
            <img className="size-[100px]" src={Wallet} alt="" />
            <p className="lg:text-[22px] text-[18px] font-medium">
              Mind Wallet
            </p>
          </div>
        </div>
        <div className="md:col-span-4 col-span-6 border-b-2 border-r-2 md:border-r-0 border-[#FFBF00]">
          <div className="md:my-[22px] my-[16px] flex items-center lg:gap-[61px] md:gap-[32px] gap-5 lg:ml-[106px] md:ml-[40px] ml-5">
            <img
              className="md:size-[100px] size-[70px]"
              src={MINDSmartChain}
              alt=""
            />
            <p className="lg:text-[22px] text-[18px] font-medium">
              Mind Smart Chain
            </p>
          </div>
        </div>
        {/* first coloum table end */}
        {/* seond column table start */}
        <div className="md:col-span-4 col-span-6 md:border-r-2 border-b-2 border-[#FFBF00]">
          <div className="md:my-[22px] my-[16px] flex items-center lg:gap-[61px] md:gap-[32px] gap-5 lg:ml-[106px] md:ml-[40px] ml-5">
            <img
              className="md:size-[100px] size-[70px]"
              src={PerryMind}
              alt=""
            />
            <p className="lg:text-[22px] text-[18px] font-medium">Perry Mind</p>
          </div>
        </div>
        <div className="md:col-span-4 col-span-6 border-r-2 border-b-2 border-[#FFBF00]">
          <div className="md:my-[22px] my-[16px] flex items-center lg:gap-[61px] md:gap-[32px] gap-5 lg:ml-[106px] md:ml-[40px] ml-5">
            <img
              className="md:size-[100px] size-[70px]"
              src={MINDScan}
              alt=""
            />
            <p className="lg:text-[22px] text-[18px] font-medium">Mind Scan</p>
          </div>
        </div>
        <div className="md:col-span-4 col-span-6 border-b-2 border-[#FFBF00]">
          <div className="md:my-[22px] my-[16px] flex items-center lg:gap-[61px] md:gap-[32px] gap-5 lg:ml-[106px] md:ml-[40px] ml-5">
            <img className="md:size-[100px] size-[70px]" src={minePay} alt="" />
            <p className="lg:text-[22px] text-[18px] font-medium">Bmind</p>
          </div>
        </div>
        {/* seond column table end */}
        {/* third column table start */}
        <div className="md:col-span-4 col-span-6 border-r-2 md:border-b-0 border-b-2 border-[#FFBF00]">
          <div className="md:my-[22px] my-[16px] flex items-center lg:gap-[61px] md:gap-[32px] gap-5 lg:ml-[106px] md:ml-[40px] ml-5">
            <img
              className="md:size-[100px] size-[70px]"
              src={MAcademy}
              alt=""
            />
            <p className="lg:text-[22px] text-[18px] font-medium">
              Mind Academy
            </p>
          </div>
        </div>
        <div className="md:col-span-4 col-span-6 md:border-r-2 border-r-0 md:border-b-0 border-b-2 border-[#FFBF00]">
          <div className="md:my-[22px] my-[16px] flex items-center lg:gap-[61px] md:gap-[32px] gap-5 lg:ml-[106px] md:ml-[40px] ml-5">
            <img
              className="md:size-[100px] size-[70px]"
              src={MUSDIcon}
              alt=""
            />
            <p className="lg:text-[22px] text-[18px] font-medium">Musd</p>
          </div>
        </div>
        <div className="md:col-span-4 col-span-6 lg:border-t-0 md:border-r-0 border-r-2 border-[#FFBF00]">
          <div className="md:my-[22px] my-[16px] flex items-center lg:gap-[61px] md:gap-[32px] gap-5 lg:ml-[106px] md:ml-[40px] ml-5">
            <img className="md:size-[100px] size-[70px]" src={MindPay} alt="" />
            <p className="lg:text-[22px] text-[18px] font-medium">Mind Pay</p>
          </div>
        </div>
        {/* third column table end */}
      </div>
    </Container>
  );
};

export default OurOtherProject;
