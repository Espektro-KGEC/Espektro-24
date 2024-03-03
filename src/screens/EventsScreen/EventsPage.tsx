import { useState } from "react";
import EmblaCarousel from "./components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import events from "./components/events";
import type { Categories } from "./components/events";

import "./embla.css";
import { cn } from "@/utils/helpers";

const OPTIONS: EmblaOptionsType = {
  loop: true,
};
// const SLIDE_COUNT = 10;
// // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function EventsPage() {
  const [activeIndex, setActiveIndex] = useState<Record<Categories, number>>({
    Exotica: 0,
    Techtix: 0,
    Quixine: 0,
  });
  const [activeDay, setActiveDay] = useState(0);
  const [open, setOpen] = useState(false);
  console.log("activeIndex", activeIndex);

  return (
    // fade in the background image on slide change
    <div>
      <section className="flex gap-1 md:gap-4 w-full fixed top-24 left-8 z-10">
        <p className="flex text-sm lg:text-base flex-col lg:leading-none md:gap-3 text-zinc-50">
          <span>D</span>
          <span>A</span>
          <span>Y</span>
        </p>
        <div className="flex-col gap-1 md:gap-4 z-10 hidden lg:flex">
          {Object.keys(events).map((day, index) => (
            <motion.button
              key={day}
              onClick={() => {
                setActiveDay(index);
                setActiveIndex({
                  Exotica: 0,
                  Techtix: 0,
                  Quixine: 0,
                });
              }}
              whileTap={{ scale: 0.93 }}
              className={`text-base font-bold p-2 px-3 leading-none rounded border-b-8 border-r-2 border-white ${
                index === activeDay ? "bg-zinc-50" : "bg-zinc-400"
              }`}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>
        <div className="flex-col self-center gap-1 md:gap-4 z-10 lg:hidden">
          <motion.button
            onClick={() => {
              setOpen(!open);
              // // setActiveDay(0);
              // setActiveIndex({
              //   Exotica: 0,
              //   Techtix: 0,
              //   Quixine: 0,
              // });
            }}
            whileTap={{ scale: 0.93 }}
            className="text-base font-bold p-3 px-4 bg-zinc-50 rounded leading-none"
          >
            {activeDay + 1}
          </motion.button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex mt-1 flex-col gap-1 md:gap-4 z-10"
              >
                {Object.keys(events)
                  .filter((day) => Number(day) !== activeDay)
                  .map((day) => (
                    <motion.button
                      key={day}
                      onClick={() => {
                        setActiveDay(Number(day));
                        setActiveIndex({
                          Exotica: 0,
                          Techtix: 0,
                          Quixine: 0,
                        });
                        setOpen(false);
                      }}
                      whileTap={{ scale: 0.93 }}
                      className={`text-base font-bold p-3 px-4 rounded bg-zinc-400 leading-none`}
                    >
                      {Number(day) + 1}
                    </motion.button>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      {Object.keys(events[activeDay]).map((cat, index) => (
        <motion.section
          key={index}
          className="min-h-screen min-w-screen bg-zinc-900 flex flex-col justify-between z-0 gap-8 items-center p-8"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(https://picsum.photos/500/650?v=${
              activeIndex[cat as Categories]
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-4xl lg:text-6xl font-light italic text-white mt-24">
            {cat}
          </h1>
          <div
            className={cn(
              "flex flex-col md:flex-row justify-between h-full md:items-center w-full"
            )}
          >
            <section className="py-5 z-0">
              <h2 className="text-white text-5xl z-0">
                {
                  events[activeDay][cat as Categories][
                    activeIndex[cat as Categories]
                  ].name
                }
              </h2>
              <p className="text-white text-lg">
                {
                  events[activeDay][cat as Categories][
                    activeIndex[cat as Categories]
                  ].description
                }
              </p>
            </section>
            {/* add blurry effests to left and right of the carousel */}
            <section
              className="carousel-container self-end max-w-[650px] bg-transparent backdrop-filter backdrop-blur-2xl rounded-2xl py-10
            
            "
            >
              <EmblaCarousel
                slides={events[activeDay][cat as Categories]}
                options={OPTIONS}
                setActiveIndex={(index) => {
                  setActiveIndex((prev) => ({
                    ...prev,
                    [cat]: index,
                  }));
                }}
              />
            </section>
          </div>
        </motion.section>
      ))}
    </div>
  );
}

export default EventsPage;
