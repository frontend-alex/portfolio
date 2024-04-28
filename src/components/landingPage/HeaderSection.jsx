import React, { useEffect, useRef, useState } from "react";

import StarShape from "@svgs/StarShape";
import { ScrollParallax } from "react-just-parallax";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import useOnScreen from "@hooks/useOnScreen";

import SplitText from "@lib/SpitText";

const HeaderSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headerTextRef = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(headerTextRef);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headerText", { type: "lines" });

      gsap.to(split.lines, {
        duration: 2,
        y: -20,
        opacity: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: document.getElementById("headerText"),
          toggleActions: "restart none none reset",
        },
      });
    }
  }, [reveal]);

  return (
    <header className="select-none min-h-screen flex items-center text-center relative">
      <ScrollParallax>
        <h1
          ref={headerTextRef}
          id="headerText"
          className="uppercase text-5xl md:text-6xl 2xl:text-[150px] leading-none special-font"
        >
          <span className="flex justify-center items-center gap-3 special-font">
            Cre
            <img
              src="/images/statue.jpg"
              className="w-[50px] lg:w-[100px] 2xl:w-[150px] h-auto rounded-t-full rounded-r-full"
            />
            ative
          </span>{" "}
          <span className="special-font">Frontend developer Bulgaria</span>
          <StarShape className="h-[50px] w-full mt-5 md:h-[100px] mx-auto" />
        </h1>
      </ScrollParallax>

      <img
        className="w-full lg:w-2/3 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 z-[-1] dark:opacity-5"
        src="/images/header-bg.png"
      />
    </header>
  );
};

export default HeaderSection;
