import Container from "../../components/container/Container";
import Heading from "../../components/container/reusbleComponent/Heading";
import img from "../../assets/image/mind-chain/Ecosystem-Circel.png";

const WhatIsMainChain = () => {
  return (
    <Container className="mt-[80px] mb-[80px] grid lg:grid-cols-12">
      <div className="col-span-12 md:col-span-6 h-full pt-[25px]">
        <Heading className="border-b-2 border-[#FFBF00]">
          What is Mindchain?
        </Heading>
        <p className="mt-[62px]">
          The Mindchain Ecosystem is a decentralized network leveraging
          blockchain technology, featuring an array of interconnected elements.
          These include cryptocurrencies, a proprietary blockchain,
          decentralized applications (DApps), user wallets, both centralized
          exchange (CEX) and decentralized exchange (DEX), along with digital
          payment solutions. This intricate framework embodies a comprehensive
          and versatile blockchain ecosystem.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-6 h-[435px] max-w-full relative overflow-hidden md:mt-0 mt-5">
        <img
          className="md:w-[606px] max-w-[90%] h-[395px] absolute right-10"
          src={img}
          alt=""
        />
        <div className="w-[161px] h-[129px] bg-[#FFBF00] absolute bottom-5 right-5 -z-10"></div>
      </div>
    </Container>
  );
};

export default WhatIsMainChain;
