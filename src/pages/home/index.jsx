import HeroSection from "./HeroSection";
import MindcahinInNumbers from "./MindcahinInNumbers";
import Navbar from "./Navbar";
import OurOtherProject from "./OurOtherProject";
import OurRoadMap from "./OurRoadMap";
import TimeUntilIcoClose from "./TimeUntilIcoClose";
import WhatCanMindChainDo from "./WhatCanMindChainDo";
import WhatIsMandChain from "./WhatIsMandChain";
import WhychooseUsSection from "./WhychooseUsSection";

const Home = () => {
  return (
    <>
     <Navbar />
     <HeroSection />
     <WhychooseUsSection />
     <WhatIsMandChain />
     <WhatCanMindChainDo />
     <MindcahinInNumbers />
     <TimeUntilIcoClose />
     <OurOtherProject />
     <OurRoadMap />
    </>
  );
};

export default Home;