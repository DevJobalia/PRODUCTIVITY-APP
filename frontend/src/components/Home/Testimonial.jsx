import React, { useRef, useEffect, useState } from "react";
import image1 from "../../assets/images/image-1.png";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import { motion } from "framer-motion";

import Card from "../../components/Card";

const cardData = [
  {
    title: "Galaxy Swirls",
    img: {
      src: image1,
      alt: "galaxy swirl",
    },
    description:
      "Galaxy swirls refer to the patterns of stars and gas within galaxies that appear as spiral arms.",
    cta: "Let’s Gooooooo!",
  },
  {
    title: "Rad Beaches",
    img: {
      src: image2,
      alt: "beach at sunset",
    },
    description:
      "Beaches at sunset offer a picturesque view of the sun setting over the ocean, with warm hues of orange, pink, and purple painting the sky.",
    cta: "Take me surfing!",
  },
  {
    title: "Killer Mountains",
    img: {
      src: image3,
      alt: "jagged mountains",
    },
    description:
      "Mountains are majestic landforms characterized by steep slopes and high elevations.",
    cta: "Pack My Bags",
  },
  {
    title: "Galaxy Swirls",
    img: {
      src: image1,
      alt: "galaxy swirl",
    },
    description:
      "Galaxy swirls refer to the patterns of stars and gas within galaxies that appear as spiral arms.",
    cta: "Let’s Gooooooo!",
  },
  {
    title: "Rad Beaches",
    img: {
      src: image2,
      alt: "beach at sunset",
    },
    description:
      "Beaches at sunset offer a picturesque view of the sun setting over the ocean, with warm hues of orange, pink, and purple painting the sky.",
    cta: "Take me surfing!",
  },
  {
    title: "Killer Mountains",
    img: {
      src: image3,
      alt: "jagged mountains",
    },
    description:
      "Mountains are majestic landforms characterized by steep slopes and high elevations.",
    cta: "Pack My Bags",
  },
];

function Testimonial() {
  // const [width, setWidth] = useState(0);
  const carousel = useRef();
  // useEffect(() => {
  //   console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  //   // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);
  return (
    <div
      className="bg-bkg text-content isolate overflow-hidden p-1"
      id="Testimonial"
    >
      <section>
        <div className="grid relative min-h-screen place-items-center place-content-center gap-8 before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10  mt-16 lg:mt-10">
          <h1 className="text-6xl font-bold text-content">
            <span className="underline decoration-accent-1">Testimonial</span>{" "}
            {/* <span className="underline decoration-accent-1">Light</span>? */}
          </h1>
          {/* TESTIMONIAL */}
          {/* <motion.div ref={carousel} className="w-fit"> */}
          <motion.section
            // animate={{ x }}
            // transition={{ repeat: Infinity, type: "spring" }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.8 }}
            drag="x"
            dragConstraints={{ left: -500, right: 500 }}
            // className="container grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-start"
            className="flex gap-4 cursor-grab"
            aria-label="card container"
          >
            {cardData.map((card) => (
              <Card {...card} key={card.title} />
            ))}
          </motion.section>
          {/* </motion.div> */}
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
