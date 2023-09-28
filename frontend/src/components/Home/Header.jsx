import React from "react";

function Header() {
  return (
    <div
      className="bg-bkg text-content isolate overflow-hidden place-items-center"
      id="Home"
    >
      <section className="min-h-screen text-content isolate overflow-hidden grid place-items-center mt-16 p-20 lg:mt-10">
        <h2 className="py-2 px-4 bg-accent-1 rounded-full">
          Over 3 million ready-to-work creatives in our community!
        </h2>
        <h1 className="text-6xl font-bold">
          <span className="underline decoration-accent-1">Choas</span> or{" "}
          <span className="underline decoration-accent-1">Calm</span>?
        </h1>
        <p className="font-primary">
          Connect with a community of millions of top-rated designers & agencies
          around the world.
        </p>
        <button className="btn btn-lg">Join Us Today</button>
      </section>
    </div>
  );
}

export default Header;
