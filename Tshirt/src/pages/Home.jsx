import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "../store";

import {
  slideAnimation,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../config/motion";
import CustomBtn from "../components/CustomBtn";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <AnimatePresence>
        {snap.intro && (
            <>
          <motion.section className="home absolute top-5 left-5 w-[max-content] z-10 md:w-[80vw] " {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")} >
              <img
                src="./threejs.png"
                alt=""
                className="h-8 w-8 object-contain"
              />
            </motion.header>

            <motion.div {...headContainerAnimation} className=" my-3 ">
                <motion.div {...headContentAnimation}>
                    <h1 className=" text-8xl font-serif font-semibold">LETS DO IT.</h1>
                </motion.div>
                <motion.div {...headTextAnimation} className="mt-3 flex flex-col gap-5">
                    <p>Customize your unique and exclusive shirt with brand new customization tools. <strong>Unleash your imagination</strong></p>
                    <CustomBtn content={"Customize Now"} HandleClick={()=> state.intro = false} styles={' bg-dark-yellow text-white p-1 px-2 rounded-md  font-semibold w-[150px]'}/>
                </motion.div>
            </motion.div>
          </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
