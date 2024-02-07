import Container from "../../components/container/Container";
import Heading from "../../components/container/reusbleComponent/Heading";

const mindChainNumber = [
  {
    totalNumber: "1.777K",
    name: "Total Transition",
  },
  {
    totalNumber: "4.4449M",
    name: "Total Blocks",
  },
  {
    totalNumber: "109+",
    name: "Total Contracts",
  },
  {
    totalNumber: "396+",
    name: "Total Wallet Addresses",
  },
  {
    totalNumber: "3.161s",
    name: "Average Block Time",
  },
  {
    totalNumber: "19+",
    name: "Total Tokens Created",
  },
];

const MindcahinInNumbers = () => {
  return (
    <div className="w-full mb-32 bg-gradient-to-bl from-[#988753] via-[#d2ab35] to-[#FFDC73] ">
      <Container className="pt-[73px] pb-20">
        <Heading className="pb-[100px]">Mindcahin in numbers</Heading>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-5">
            {mindChainNumber.map((data, i) => (
              <div
                key={i}
                className="col-span-6 md:col-span-4 bg-[#fff] p-[26px] rounded-lg flex flex-col items-center"
              >
                <h2 className="lg:text-[54px] md:text-[32px] text-[24px] font-medium mb-5">
                  {data.totalNumber}
                </h2>
                <p className="text-[20px] font-light mb-[15px]">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MindcahinInNumbers;
