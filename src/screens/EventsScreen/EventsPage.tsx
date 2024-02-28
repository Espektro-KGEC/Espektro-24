import { useState } from "react";
import EmblaCarousel from "./components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";

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
  console.log("activeIndex", activeIndex);

  return (
    // fade in the background image on slide change
    <div>
      <section className="day-tabs flex justify-center gap-1 md:gap-4 fixed top-24 items-center w-full z-10">
        {Object.keys(events).map((day, index) => (
          <button
            key={day}
            onClick={() => {
              setActiveDay(index);
              setActiveIndex({
                Exotica: 0,
                Techtix: 0,
                Quixine: 0,
              });
            }}
            className={`text-base font-bold py-3 md:py-1 px-4 rounded-lg ${
              index === activeDay ? "bg-zinc-50" : "bg-zinc-50/50"
            }`}
          >
            Day {index}
          </button>
        ))}
      </section>
      {Object.keys(events[activeDay]).map((cat, index) => (
        <motion.section
          key={index}
          className="min-h-screen min-w-screen bg-zinc-900 flex flex-col justify-center gap-8 items-center p-8"
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
          <h1 className="text-4xl md:py-24 font-bold text-white">
            {cat.toUpperCase()}
          </h1>
          <div
            className={cn("flex flex-col-reverse md:flex-row justify-between px-0 md:px-32 md:items-center w-full", {
              "md:flex-row-reverse": index % 2 !== 0,
            })}
          >
            <section className="py-5">
              <h2 className="text-white text-5xl">
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
            <section className="carousel-container max-w-[650px] bg-transparent backdrop-blur-2xl rounded-2xl border border-zinc-50/10 py-10">
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
