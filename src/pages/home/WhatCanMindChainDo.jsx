import Container from "../../components/container/Container";
import Heading from "../../components/container/reusbleComponent/Heading";

import blockChainNetwork from "../../assets/image/do-mind-chain/Own-Blockchain-Network.png";
import giftCard from "../../assets/image/do-mind-chain/MIND-Chain-Gift-Card.png";
import globalComunity from "../../assets/image/do-mind-chain/Global-Community.png";
import supportedBlockChain from "../../assets/image/do-mind-chain/EVM-Supported-Blockchain.png";
import centralized from "../../assets/image/do-mind-chain/Centralized-Exchange-for-Easy-Trading.png";
import advanceAnalysis from "../../assets/image/do-mind-chain/Advanced-Analytics-Tools.png";

const doMindChainData = [
  {
    img: blockChainNetwork,
    title: "Own Blockchain Network",
    description:
      "Mindchain pioneers innovation with its proprietary blockchain network, offering a secure foundation for decentralized transactions. Experience the power of our custom blockchain, driving the future of digital connectivity.",
  },
  {
    img: giftCard,
    title: "EVM-Supported Blockchain",
    description:
      "MindChain leads with an EVM-supported blockchain, enhancing compatibility and interoperability. Our advanced blockchain infrastructure leverages the Ethereum Virtual Machine, ensuring a seamless and efficient decentralized experience for users.",
  },
  {
    img: globalComunity,
    title: "MINDCHAIN Gift Card Program",
    description:
      "Experience the joy of gifting with MINDCHAIN's Gift Card Program. Unlock the thrill of cryptocurrency and empower your loved ones financially. Perfect for any occasion, it's more than a card – it's an entry into the digital assets world!",
  },
  {
    img: supportedBlockChain,
    title: "Global Community Hub",
    description:
      "Join a thriving global community within Mindchain's ecosystem, connecting with like-minded enthusiasts, gaining insights, and contributing to the growth of the decentralized movement.",
  },
  {
    img: centralized,
    title: "Advanced Analytics Tools",
    description:
      "Empower your trading decisions with Mindchain's Centralized Exchange, providing advanced analytics tools for users to make informed choices in the dynamic cryptocurrency market.",
  },
  {
    img: advanceAnalysis,
    title: "Centralized Exchange for Easy Trading",
    description:
      "Mindchain's Centralized Exchange offers a user-friendly platform for seamless trading. Explore easy and efficient transactions, empowering users with a straightforward and secure experience in the dynamic world of cryptocurrency.",
  },
];

const WhatCanMindChainDo = () => {
  return (
    <Container className="mb-[150px]">
      <Heading className="border-b-2 border-[#FFBF00] mb-[84px]">
        What can Mindcahin do?
      </Heading>
      <div className="grid grid-cols-12 gap-5">
        {doMindChainData.map((data, i) => (
          <div key={i} className="col-span-12 lg:col-span-4 rounded-lg border-r border-r-[#FFBF00]">
            <img className="size-[90px]" src={data.img} alt="" />
            <h2 className="font-semibold text-[24px] mt-[33px] mb-[15px]">{data.title}</h2>
            <p className="text-[14px] text-[#414141]">{data.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhatCanMindChainDo;
