// REF: https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
import React, { useRef, useEffect, useState } from "react";
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import { motion } from "framer-motion";

import Card from "../components/Card";

const cardData = [
  {
    title: "Galaxy Swirls",
    img: {
      src: image1,
      alt: "galaxy swirl",
    },
    description:
      "Galaxy swirls refer to the patterns of stars and gas within galaxies that appear as spiral arms. These arms are formed by the gravitational forces between stars and the rotation of the galaxy.",
    cta: "Let’s Gooooooo!",
  },

  {
    title: "Killer Mountains",
    img: {
      src: image3,
      alt: "jagged mountains",
    },
    description:
      "Mountains are majestic landforms characterized by steep slopes and high elevations. They are often associated with natural beauty, adventure, and challenge, and are home to diverse ecosystems and unique cultures.",
    cta: "Pack My Bags",
  },
  {
    title: "Galaxy Swirls",
    img: {
      src: image1,
      alt: "galaxy swirl",
    },
    description:
      "Galaxy swirls refer to the patterns of stars and gas within galaxies that appear as spiral arms. These arms are formed by the gravitational forces between stars and the rotation of the galaxy.",
    cta: "Let’s Gooooooo!",
  },
  {
    title: "Killer Mountains",
    img: {
      src: image3,
      alt: "jagged mountains",
    },
    description:
      "Mountains are majestic landforms characterized by steep slopes and high elevations. They are often associated with natural beauty, adventure, and challenge, and are home to diverse ecosystems and unique cultures.",
    cta: "Pack My Bags",
  },
];

function Events() {
  return (
    <div className="bg-bkg text-content isolate overflow-hidden p-1">
      <section>
        <div className="grid relative min-h-screen place-items-center place-content-center gap-8 before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10 mt-10">
          <h1 className="text-6xl font-bold text-content">
            <span className="underline decoration-accent-1">Testimonial</span>{" "}
          </h1>

          {/* TESTIMONIAL */}
          <section
            // className="container grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-start"
            // className="flex gap-4 cursor-grab animate-infinite-scroll"
            className="w-full inline-flex flex-nowrap"
            aria-label="card container"
          >
            <div className="flex items-center animate-infinite-scroll">
              {/* justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  */}
              {cardData.map((card) => (
                <Card {...card} key={card.title} />
              ))}
            </div>
            <div
              className="flex items-center justify-center animate-infinite-scroll"
              //   md:justify-start [&_li]:mx-8 [&_img]:max-w-none
              aria-hidden="true"
            >
              {cardData.map((card) => (
                <Card {...card} key={card.title} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Events;
