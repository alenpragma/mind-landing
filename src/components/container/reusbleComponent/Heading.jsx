
const Heading = ({children, className}) => {
  return (
    <div className={`text-[#1F1F1F] font-bold text-[54px] w-fit pb-2 ${className}`}>
      {children}
    </div>
  );
};

export default Heading;