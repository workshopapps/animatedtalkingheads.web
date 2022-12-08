import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../../../assets/svg";

const Box = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  function changeBox(arg) {
    setActive(arg);
  }
  return (
    <>
      <div
        className={`${active && "!bg-[#D9D9D9]"
          } bg-[#fbfbfb] flex max-w-[1288px]  mx-auto justify-between items-center border-b py-[22px] px-[16px] lg:py-[28px] lg:pl-[56px] lg:pr-[32px]`}>
        <p className="text-base lg:text-2xl">{question}</p>
        {active ? (
          <ArrowUpIcon onClick={() => changeBox(false)} />
        ) : (
          <ArrowDownIcon onClick={() => changeBox(true)} />
        )}
      </div>
      {active && (
        <p className="pt-[16px] pb-[32px]  pl-[16px] lg:pl-[56px] max-w-[1288px] mx-auto ">
          {answer}
        </p>
      )}
    </>
  );
};

export default Box;
