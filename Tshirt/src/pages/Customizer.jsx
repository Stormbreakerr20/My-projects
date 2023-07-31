import {
  CustomBtn,
  AIpicker,
  Colorpicker,
  Filepicker,
  Tab,
} from "../components";
import { useSnapshot } from "valtio";
import { state } from "../store";
import { download, logoShirt, stylishShirt } from "../assets";
import config from "../config/config";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { slideAnimation, fadeAnimation } from "../config/motion";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");

  const [activeEditorTab, setEditorTab] = useState("");
  const [activeFilterTab, setFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const generateTab = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <Colorpicker />;
      case "filepicker":
        return <Filepicker file={file} setFile={setFile} readfile={readfile} />;
      case "aipicker":
        return <AIpicker />;
      default:
        return null;
    }
  };

  const readfile = (type) => {
    console.log("start")
    reader(file).then((result) => {
      handleDecals(type, result);
      setEditorTab("");
    });
  };

  const handleDecals = (type, result) => {
    const decaltype = DecalTypes[type];
    console.log(decaltype)
    console.log(result)

    state[decaltype.stateProperty] = result;

    if (!activeFilterTab[decaltype.filterTab]) {
      handleFilterTab(decaltype.filterTab);
    }
  };

  const handleFilterTab = (tabname) => {
    switch (tabname) {
      case "logoShirt":
        activeFilterTab[tabname]=!activeFilterTab[tabname]
        state.isLogoicon = activeFilterTab[tabname];
        break;
      case "stylishShirt":
        activeFilterTab[tabname]=!activeFilterTab[tabname]
        state.isFullicon = activeFilterTab[tabname];
        break;
      case "download":
          break;  
      default:
        (state.isLogoicon = true), (state.Fullicon = false);
        break;
    }
    i;
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-[100svh]">
              <div className="editortabs-container tabs  flex gap-2 ">
                <div className="backdrop-blur-sm bg-white/30 rounded-lg">
                  {EditorTabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      tab={tab}
                      handleClick={() => {activeEditorTab===tab.name?setEditorTab(""):setEditorTab(tab.name)}}
                    />
                  ))}
                </div>
                {generateTab()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomBtn
              content="Go Back"
              HandleClick={() => (state.intro = true)}
              styles={`w-fit px-4 py-2.5 font-bold text-sm  rounded-lg `}
            />
          </motion.div>

          <motion.div
            className="flex absolute bottom-0 w-[100%] justify-center p-1  "
            {...slideAnimation("up")}
          >
            <div className=" flex backdrop-blur-sm bg-white/30 rounded-lg">
              {FilterTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab={activeFilterTab[tab.name]}
                  handleClick={() => {
                    handleFilterTab(tab.name);
                  }}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
