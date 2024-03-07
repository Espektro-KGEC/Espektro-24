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
  const [activeDays, setActiveDays] = useState<Record<Categories, number>>({
    Techtix: 0,
    Quixine: 0,
    Exotica: 0,
  });
  // // const [open, setOpen] = useState(false);
  // console.log("activeIndex", activeIndex);

  return (
    // fade in the background image on slide change
    <div>
      {Object.keys(events).map((cat, index) => (
        <motion.section
          key={index}
          className="min-h-screen font-cab min-w-screen bg-zinc-900 flex flex-col justify-between z-0 gap-8 items-center p-8"
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
          <div className="flex flex-col lg:flex-row w-full lg:items-center justify-between mt-20 gap-4">
            <h1 className="text-5xl lg:text-7xl text-zinc-100 font-zina">
              {cat}
            </h1>
            {/* add a separating line between the title and the tabs */}
            <div className="h-[1.5px] w-full bg-zinc-50/20 hidden lg:block"></div>
            {/* day toggle tabs */}
            <div className="flex gap-4 lg:ml-auto">
              {Object.keys(events[cat as Categories]).map((day, index) => (
                <button
                  key={index}
                  className={cn(
                    "text-base bg-zinc-50/20 rounded-full px-3 py-1 lg:px-5 lg:py-2 md:px-4 md:py-2 min-w-max text-white",
                    activeDays[cat as Categories] === index
                      ? "bg-zinc-50/40"
                      : ""
                  )}
                  onClick={() => {
                    setActiveDays((prev) => ({
                      ...prev,
                      [cat]: index,
                    }));
                    setActiveIndex((prev) => ({
                      ...prev,
                      [cat]: 0,
                    }));
                  }}
                >
                  Day {day}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[1.5px] w-full bg-zinc-50/20 lg:hidden block"></div>
          <div className="flex flex-col md:flex-row justify-between h-full w-full gap-8">
            <section className="z-0 flex flex-col gap-4 min-h-full">
              <h2 className="text-white font-bold text-5xl z-0">
                Event{" "}
                {
                  events[cat as Categories][activeDays[cat as Categories]][
                    activeIndex[cat as Categories]
                  ].name
                }
              </h2>
              <div className="flex gap-2">
                <p className="text-white text-sm bg-zinc-50/20 rounded-full px-3 py-1 md:px-4 md:py-1.5 flex items-center min-w-max">
                  Label 1
                </p>
                <p className="text-white text-sm bg-zinc-50/20 rounded-full px-3 py-1 md:px-4 md:py-1.5 flex items-center min-w-max">
                  {" "}
                  Label 2
                </p>
                <p className="text-white text-sm bg-zinc-50/20 rounded-full px-3 py-1 md:px-4 md:py-1.5 flex items-center min-w-max">
                  Label 3
                </p>
                <p className="text-white text-sm bg-zinc-50/20 rounded-full px-3 py-1 md:px-4 md:py-1.5 flex items-center min-w-max">
                  Label 4
                </p>
              </div>
              <p className="text-white text-base text-balance">
                {
                  events[cat as Categories][activeDays[cat as Categories]][
                    activeIndex[cat as Categories]
                  ].description
                }{" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                perspiciatis esse eum? Maxime velit sint architecto repudiandae
                debitis! Odit dolore fuga, cum iste veniam labore aspernatur
                voluptatibus numquam ab quidem.
              </p>
              <div className="flex gap-4 items-center">
                <button className="bg-purple-400 rounded-lg px-4 py-2 min-w-max">
                  Button1
                </button>
                <button className="bg-zinc-400 rounded-lg px-4 py-2 min-w-max">
                  Button2
                </button>
              </div>
            </section>
            {/* add blurry effests to left and right of the carousel */}
            <section
              className="carousel-container min-h-full self-end max-w-[650px] lg:min-w-[650px] bg-zinc-50/5 backdrop-filter backdrop-blur-[50px] rounded-2xl py-10
            
            "
            >
              <EmblaCarousel
                slides={
                  events[cat as Categories][activeDays[cat as Categories]]
                }
                options={OPTIONS}
                setActiveIndex={(index) => {
                  setActiveIndex((prev) => ({
                    ...prev,
                    [cat as Categories]: index,
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
