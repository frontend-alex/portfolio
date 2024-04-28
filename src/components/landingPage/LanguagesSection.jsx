import useOnScreen from "@hooks/useOnScreen";
import { cn } from "@lib/utils";
import React, { useRef, useEffect, useState } from "react";
import SplitText from "@lib/SpitText";
import StarShape from "@svgs/StarShape";
import gsap from "gsap";

import { accordionData } from "@constants/Data";

import "react-circular-progressbar/dist/styles.css";
import { Progress } from "../ui/progress";
import { Plus } from "lucide-react";

const LanguagesSection = () => {
  const langugagesText = useRef(null);

  const onScreen = useOnScreen(langugagesText, 0.5);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#langugages-text", {
        type: "lines",
        linesClass: "lineChildren",
      });

      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          // opacity: 1,
          stagger: 0.1,
          ease: "power2",
          scrollTrigger: {
            trigger: "#langugages-text",
            toggleActions: "restart none none reset",
          },
        },
      );
    }
  }, [reveal]);

  useEffect(() => {
    if (reveal) {
      gsap.to(".lang-card", {
        duration: 1,
        stagger: 0.1,
        delay: 0.1,
        opacity: 1,
        ease: "sine.in",
        scrollTrigger: {
          trigger: '#cards',
          toggleActions: "restart none none reset",
        },
      });
    }
  }, [reveal]);

  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  return (
    <section className="my-10">
      <div
        className={cn("w-full", { "is-reveal": reveal })}
        id="langugages-text"
        ref={langugagesText}
      >
        <div className="flex md:hidden items-center justify-center border border-black dark:border-[#252525] rounded-full p-5 w-[70px] h-[70px]">
          <span className="text-2xl special-font">03</span>
        </div>

        <h1 className="text-5xl xl:text-[150px] text-center special-font uppercase">
          Tools
        </h1>

        <div className="w-full flex items-center justify-center gap-3 lg:justify-between xl:px-20">
          <div className="hidden md:flex items-center justify-center border border-black dark:border-[#252525] rounded-full p-5 w-[70px] h-[70px]">
            <span className="text-2xl special-font">03</span>
          </div>
          <h1 className="text-2xl md:text-5xl flex items-center mx-auto lg:mx-0 gap-5 special-font uppercase">
            languages{" "}
            <StarShape className="h-[20px] w-full mt-5 md:h-[50px] mx-auto" />
          </h1>
        </div>
      </div>

      <div
        id="cards"
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mt-20 lang-card-container"
      >
        {accordionData.map((card, id) => {
          const { img, name, color, value } = card;
          return (
            <div
              key={id}
              className="card lang-card relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255, 0.1)] rounded-lg w-full p-5"
            >
              <div className="card-content flex flex-col gap-5 justify-center items-center dark:bg-[rgb(23,23,23)]">
                <img
                  className="h-[100px] w-[100px] mx-auto object-contain"
                  src={img}
                  alt={name}
                />
                <h1 className="text-xl font-bold">{name}</h1>
                <div className="flex items-center justify-between gap-3 w-full">
                  <Progress
                    value={value}
                    color={color}
                    className="w-full h-2 bg-[#e6e6e6] dark:bg-[#252525]"
                  />
                  <p>{value}%</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="lang-card card relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255, 0.1)] rounded-lg w-full p-5">
          <div className="card-content flex flex-col gap-0 justify-center items-center dark:bg-[rgb(23,23,23)]">
            <h1 className="text-xl font-bold">See All</h1>
            <Plus size={60} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
