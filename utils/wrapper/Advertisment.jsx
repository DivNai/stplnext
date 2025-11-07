import MotionH1 from "@/Animation/motion tags/MotionH1";
import MotionP from "@/Animation/motion tags/MotionP";
import React from "react";

const Advertisment = ({ heading, subheading, para1, para2, para3 }) => {
  const h1Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="md:my-56 my-32 flex flex-col gap-10 md:px-[6rem] px-[2rem] text-xl ">
      <MotionH1
        variants={h1Variants}
        viewport={{
          amount: "all",
          once: true,
        }}
        className="md:text-6xl text-6xl "
      >
        {heading}
      </MotionH1>
      <h3 className="text-3xl">{subheading}</h3>
      <MotionP
        variants={h1Variants}
        viewport={{
          amount: "all",
          once: true,
        }}
        className="font-light"
      >
        {para1}
      </MotionP>
      <MotionP
        variants={h1Variants}
        viewport={{
          amount: "all",
          once: true,
        }}
        className="font-semibold"
      >
        {para2}
      </MotionP>
      <MotionP
        variants={h1Variants}
        viewport={{
          amount: "all",
          once: true,
        }}
      >
        {para3}
      </MotionP>
    </section>
  );
};

export default Advertisment;
