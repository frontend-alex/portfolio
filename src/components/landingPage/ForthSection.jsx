import React, { useState, useRef, useEffect } from "react";

import StarShape from "@svgs/StarShape";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { cn } from "@lib/utils";

import useOnScreen from "@hooks/useOnScreen";

import SplitText from "@lib/SpitText";

const ForthSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
    console.log(reveal);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#para2", { type: "lines" });

      gsap.to(split.lines, {
        duration: 2,
        y: -20,
        opacity: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: document.getElementById("para2"),
          toggleActions: "restart none none reset",
        },
      });
    }
  }, [reveal]);
  return (
    <section className="relative overflow-hidden min-h-screen">
      
      <img
          src="/images/line.png"
          className=" w-2/3 absolute -right-10 opacity-25 dark:opacity-[0.01] z-[-1] top-10 "
      />

      <div className="max-w-7xl mx-auto mt-56 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full">
          <div className="bg-slate-200 dark:bg-[#2525251f] rounded-tl-[35%] rounded-br-[55%] rounded-bl-[35%] rounded-tr-[35%]">
            <img src="/images/statue-4.png" className="mx-auto" />
          </div>
        </div>

        <div className="w-full flex flex-col gap-5">
          <p
            id="para2"
            ref={ref}
            className={cn({ "text-4xl opacity-0 is-reveal": reveal })}
          >
            <div className="flex items-center justify-center border border-black dark:border-[#252525] rounded-full p-5 w-[70px] h-[70px]">
              <span className="text-2xl special-font">04</span>
            </div>
            IN MY <strong>{new Date().getFullYear() - 2018}</strong> YEARS OF{" "}
            <strong>PROGRAMMING</strong> I TURN IDEAS INTO{" "}
            <strong>AMAZING</strong> WEBSITES THROUGH THE WORLD OF{" "}
            <strong>CREATIVE</strong> AND{" "}
            <strong>
              INTERACTIVE IDEAS & DESIGN.
              <StarShape className="h-[20px] w-full mt-5 md:h-[50px] mx-auto" />
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForthSection;
