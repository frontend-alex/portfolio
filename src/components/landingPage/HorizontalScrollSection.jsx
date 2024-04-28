import { galleryData } from "@constants/Data";
import React, { useLayoutEffect, useEffect, useState, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "@hooks/useOnScreen";
import SplitText from "@lib/SpitText";
import { cn } from "@lib/utils";
import StarShape from "@svgs/StarShape";

import { Button } from "../ui/button";
import AnimatedButton from "../ui/animated-button";

gsap.registerPlugin(ScrollTrigger);


export const GalleryItem = ({
  src,
  category,
  subtitle,
  title,
  index,
  link,
  color
}) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);



  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info ">
          <h1 className={`gallery-info-title mix-blend-difference`}>{title}</h1>
          <p className="gallery-info-category px-3">{category}</p>
          <div className="mt-5">
            <AnimatedButton/>
          </div>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
};

const HorizontalScrollSection = () => {
  const component = useRef(null);
  const refer = useRef(null);
  const slider = useRef(null);

  const onScreen = useOnScreen(refer, 0.5);
  const [reveal, setReveal] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".gallery-item-wrapper");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: slider.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
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
            trigger: "#location-text",
            toggleActions: "restart none none reset",
          },
        },
      );
    }
  }, [reveal]);

  return (
    <section className="flex flex-col items-center gap-20">
      <div
        className={cn("w-full", { "is-reveal": reveal })}
        id="location-text"
        ref={refer}
      >
        <div className="flex md:hidden items-center justify-center border border-black dark:border-[#252525] rounded-full p-5 w-[70px] h-[70px]">
          <span className="text-2xl special-font">02</span>
        </div>

        <h1 className="text-5xl xl:text-[150px] text-center special-font uppercase">
            WORK
        </h1>

        <div className="w-full flex items-center justify-center gap-3 lg:justify-between xl:px-20">
          <div className="hidden md:flex items-center justify-center border border-black dark:border-[#252525] rounded-full p-5 w-[70px] h-[70px]">
            <span className="text-2xl special-font">02</span>
          </div>
          <h1 className="text-2xl md:text-5xl flex items-center mx-auto lg:mx-0 gap-5 special-font uppercase">
            Projects{" "}
            <StarShape className="h-[20px] w-full mt-5 md:h-[50px] mx-auto" />
          </h1>
        </div>
      </div>

      <section
        className="relative section-wrapper gallery-wrap hidden lg:block"
        ref={component}
        id="project"
      >
        <img src="/images/dots.png" className="dark:hidden absolute mt-[340px] opacity-45 select-none" alt="dots" /> 
        <img src="/images/white-dots.png" className="hidden dark:flex absolute mt-[140px]  opacity-25 select-none" alt="dots" />

        <img src="/images/dots.png" className="dark:hidden absolute left-[60%] top-[80%] opacity-45 select-none" alt="dots" /> 
        <img src="/images/white-dots.png" className="hidden dark:flex absolute left-[60%] top-[80%] opacity-25 select-none" alt="dots" />

        <img src="/images/dots.png" className="dark:hidden absolute  top-1/2 opacity-45 select-none" alt="dots" /> 
        <img src="/images/white-dots.png" className="hidden dark:flex absolute top-1/2 opacity-25 select-none" alt="dots" />

        <img src="/images/dots.png" className="dark:hidden absolute left-1/2 top-1/3 opacity-45 select-none" alt="dots" /> 
        <img src="/images/white-dots.png" className="hidden dark:flex absolute left-1/2 top-1/3 opacity-25 select-none" alt="dots" />

        <div className="gallery" id="main-container" ref={slider}>
          {galleryData.map((image, index) => (
            <GalleryItem
              key={image.id}
              index={index}
              {...image}
            />
          ))}
        </div>
      </section>


      <section className="flex flex-col gap-20 lg:hidden">
      {galleryData.map((image, index) => (
            <div className="flex flex-col gap-5" key={index}>
              <img src={image.src} alt={image.title}/>
              <h1 className="text-4xl font-bold gallery-info-title">{image.title}</h1>
              <Button><a className="py-5" href={image.link}>Learn More</a></Button>
              <p className="text-sm">{image.category}</p>
            </div>
          ))}
      </section>
    </section>
  );
};

export default HorizontalScrollSection;
