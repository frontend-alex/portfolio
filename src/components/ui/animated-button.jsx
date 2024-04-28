import Link from "next/link";
import React from "react";

const AnimatedButton = ({ href }) => {
  return (
    <>
      <Link href={href} id="hoverElement" className="link-button">
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          className="link__svg dark:stroke-white dark:fill-white"
          aria-labelledby="link1-title link1-desc"
        >
          <path
            id="link-circle"
            class="link__path"
            d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            stroke="none"
            fill="none"
          />

          <path
            className="link__arrow"
            d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
            fill="none"
          />

          <text className="link__text">
            <textPath className="text-white" href="#link-circle" stroke="none">
              Learn more about this site
            </textPath>
          </text>
        </svg>
      </Link>
    </>
  );
};

export default AnimatedButton;
