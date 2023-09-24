import React, { useEffect, useState } from "react";
import Testimonial from "../components/Testimonial";

function App() {
  return (
    <>
      <div className="bg-bkg text-content isolate overflow-hidden p-4 sm:p-8 grid place-items-center">
        {/* front */}
        <section
          className="min-h-screen text-content isolate overflow-hidden p-4 sm:p-8 grid place-items-center mt-10"
          id="Home"
        >
          <h2 className="py-2 px-4 bg-accent-1 rounded-full">
            Over 3 million ready-to-work creatives in our community!
          </h2>
          <h1 className="text-6xl font-bold">
            <span className="underline decoration-accent-1">Choas</span> or{" "}
            <span className="underline decoration-accent-1">Calm</span>?
          </h1>
          <p className="font-primary">
            Connect with a community of millions of top-rated designers &
            agencies around the world.
          </p>
          <button className="btn btn-lg">Join Us Today</button>
        </section>
        <section id="Testimonial">
          <Testimonial />
        </section>
      </div>
    </>
  );
}

export default App;
