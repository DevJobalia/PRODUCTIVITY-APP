import React from "react";

function Todo() {
  return (
    <>
      <div className="bg-bkg text-content isolate overflow-hidden p-4 sm:p-8 grid place-items-center min-h-screen">
        {/* <div className="grid relative min-h-screen place-items-center place-content-center gap-16 before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10"> */}
        <h1 className="text-6xl font-bold text-content">
          <span className="underline decoration-accent-1">Dark</span> or{" "}
          <span className="underline decoration-accent-1">Light</span>?
        </h1>
      </div>
    </>
  );
}

export default Todo;
