// import "./style.css";
import LoremIpsum from "../components/LoremIpsum";
import { motion, useScroll } from "framer-motion";

function Blogs() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-bkg text-content isolate overflow-hidden p-4 sm:p-8 grid place-items-center min-h-screen">
      <div className="mt-10">
        <motion.div
          className="fixed left-0 right-0 h-2 bg-[#ff0055] origin-left z-20"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="d max-w-5xl">
          <h1>
            <code>useScroll</code> demo
          </h1>
          <LoremIpsum />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
