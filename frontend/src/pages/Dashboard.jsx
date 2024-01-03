// REF: https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
import React from "react";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="bg-bkg text-content isolate overflow-hidden p-1">
      <section>
        <div className="grid relative min-h-screen place-items-center place-content-center gap-8 before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10 mt-10">
          <h1 className="text-6xl font-bold text-content">
            <span className="underline decoration-accent-1">Testimonial</span>{" "}
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
