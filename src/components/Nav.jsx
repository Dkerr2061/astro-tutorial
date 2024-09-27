import { motion } from "framer-motion";
import { useState } from "react";
// import mainLogo from "../../public/GearHeadz.png";
import { useMediaQuery } from "../util/useMediaQuery";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  function handleToggle() {
    setToggled((prevToggle) => !prevToggle);
  }

  return (
    <nav className="relative mx-8 mb-24 w-full flex justify-between items-center pt-12 pb-6 px-12 font-medium md:mx-16 lg:mx-32 font-serif">
      <div>
        <img
          src="/GearHeadz.png"
          alt="Gear Headz logo"
          width={64}
          height={64}
          format="webp"
          className="w-16 bg-transparent border-none rounded-full"
        />
      </div>
      <h1 className="text-black text-center text-6xl">
        <a href="/">Gear Headz</a>
      </h1>

      {matches && (
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/gallery">Gallery</a>
        </div>
      )}
      {!matches && (
        <div onClick={handleToggle} className="space-y-1.5 cursor-pointer z-50">
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              width: toggled ? 0 : 24,
            }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}
      {toggled && !matches && (
        <div className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/blog">
              Blog
            </motion.a>
            <motion.a variants={itemMotion} href="/gallery">
              Gallery
            </motion.a>
            <motion.a variants={itemMotion} href="/about">
              About
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
