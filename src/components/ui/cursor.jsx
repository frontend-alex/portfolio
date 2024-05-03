'use client'

import React, { useEffect, useState } from "react";

import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const Cursor = () => {
  const [ isActive, setIsActive ] = useState(false)


  const secondaryCursor = React.useRef(null);
  const mainCursor = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };

    const hoveredItems = document.querySelectorAll("#hoverElement")

    for(const items of hoveredItems) {
      items.addEventListener("mouseenter", (ev) => {
        gsap.to('#body', {
          cursor: "none"
        })
        gsap.to("#second-cursor", {
          opacity: '0',
        })
        gsap.to("#main-curosr", {
          width: 70,
          height: 70,
          position:'absolute',
          left:'-30px',
          top: '-30px',
          backgroundColor:'blue',
          cursor: "none"
        })
        gsap.to("#cursor-icon", {
          display: 'block',
        })
        setIsActive(true)
      })
  
      items.addEventListener("mouseleave", (ev) => {
        gsap.to("#main-curosr", {
          width: 30,
          height: 30,
          position:'relative',
          left:'0',
          top: '0',
          backgroundColor:'white',
          cursor:"default"
        })
        gsap.to("#second-cursor", {
          opacity: '1'
        })
        gsap.to("#cursor-icon", {
          display: 'none',
        })
      });
      gsap.to('#body', {
        cursor: "default"
      });
      setIsActive(false)
    }

    followMouse();
  }, []);
  return (
    <div className="z-[10000000]">
      <div className="main-cursor" ref={mainCursor} >
        <div className="main-cursor-background flex items-center justify-center" id="main-curosr">
          {isActive && <ArrowRight className="dark:text-white text-white"/> }
        </div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background" id='second-cursor'></div>
      </div>
    </div>
  );
};

export default Cursor;
