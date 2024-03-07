import { AnimatePresence, motion } from "framer-motion";

export default function AboutPage() {
  return (
    <AnimatePresence>
      <main className="flex flex-col lg:flex-row justify-start min-h-screen h-full font-cab">
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
          className="w-full lg:h-full lg:w-[40%] fixed left-0 top-0 h-1/3 z-0 lg:z-10"
        >
          <img
            src="https://images.pexels.com/photos/20367918/pexels-photo-20367918/free-photo-of-a-corn-field-with-tall-grass-and-tall-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="banner"
            className="w-full h-full object-cover lg:z-10"
          />
        </motion.div>
        {/* slide down */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "tween",
            ease: "easeInOut",
          }}
          className="w-full lg:w-[60%] flex flex-col justify-center p-8 lg:ml-[40%] lg:mt-16 z-10 lg:z-0 mt-[70%] bg-white"
        >
          <h1 className="text-5xl lg:text-7xl text-zinc-900 font-zina">
            About Us
          </h1>
          <p className="text-black text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi.
          </p>
          <p className="text-black text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi.
          </p>
          <img
            src="https://images.pexels.com/photos/4483237/pexels-photo-4483237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="about-image"
            className="w-full h-full object-cover rounded-lg mt-4"
          />

          <p className="text-black text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi.
          </p>
          <p className="text-black text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi.
          </p>
          <p className="text-black text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi. Donec
            condimentum, enim nec ultricies tincidunt, nunc mauris vestibulum
            libero, nec fermentum libero purus nec justo. Nulla facilisi.
          </p>
        </motion.div>
      </main>
    </AnimatePresence>
  );
}
