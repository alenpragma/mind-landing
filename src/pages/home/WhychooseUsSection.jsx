import Container from "../../components/container/Container";
import Heading from "../../components/container/reusbleComponent/Heading";

import ecosysystem from "../../assets/image/whychooseUs/Blockchain-Ecosystem.png";
import lightingFast from "../../assets/image/whychooseUs/Lightning-Fast Transactions.png";
import semless from "../../assets/image/whychooseUs/Seamless-Transactions.png";
import robustSecurity from "../../assets/image/whychooseUs/Robust-Security-Measures.png";
import earlyEnvestors from "../../assets/image/whychooseUs/Early-Investors.png";
import userFriendly from "../../assets/image/whychooseUs/User-Friendly-Interface.png";

const whyChooseUsData = [
  {
    img: ecosysystem,
    title: "Custom Blockchain Ecosystem",
    description:
      "Step into the future with Mindchain's custom blockchain ecosystem. Lightning-fast transactions, low fees, and cutting-edge security redefine decentralized possibilities. Join us for a seamless, secure, and innovative experience.",
  },
  {
    img: lightingFast,
    title: "Lightning-Fast Transactions",
    description:
      "MindChain ensures lightning-fast transactions, providing an unparalleled experience in decentralized speed. Empower your transactions with the swift efficiency of our cutting-edge blockchain technology for seamless and rapid transactions.",
  },
  {
    img: semless,
    title: "Low Fees for Seamless Transactions",
    description:
      "Experience a seamless financial journey with Mindchain, where low fees redefine transactions. Our user-friendly blockchain ensures cost-effectiveness, making your decentralized experience both efficient and economical",
  },
  {
    img: robustSecurity,
    title: "Robust Security Measures",
    description:
      "Mindchain's commitment to security is unwavering, implementing robust measures to fortify your transactions within the decentralized space. Rest easy, knowing your assets are protected in our secure blockchain environment.",
  },
  {
    img: earlyEnvestors,
    title: "Special Offer for Early Investors",
    description:
      "Position yourself for success as an early investor with MindChain's exclusive offer. Embrace unique benefits, contribute to the decentralized revolution, and shape the future of blockchain with unparalleled incentives.",
  },
  {
    img: userFriendly,
    title: "User-Friendly Interface",
    description:
      "Mindchain redefines simplicity with a user-friendly interface, ensuring a seamless and enjoyable interaction. Experience the ease of navigation as you explore the limitless possibilities of our custom blockchain ecosystem.",
  },
];

const WhychooseUsSection = () => {
  return (
    <Container className="mt-[149px] mb-[80px]">
      <Heading className="mb-[66px] border-b-2 border-[#FFBF00]">Why Choose Us-</Heading>
      <div className="grid grid-cols-12 gap-5">
        {whyChooseUsData.map((data, i) => (
          <div className="col-span-6 md:col-span-4 border border-[#FFBF00] rounded px-[34px]" key={i}>
            <img className="w-full" src={data.img} alt="" />
            <div className="mt-[30px] mb-[89px]">
            <h2 className="my-[35px] text-[24px] font-semibold text-[#1F1F1F]">{data.title}</h2>
            <p className="text-[16px] text-[#414141]">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhychooseUsSection;
