import React from "react";
import {
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Sidenav from "./Sidenav";
import Hamburger from 'hamburger-react'

 
export default function Drawerarea() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

 
  return (
    <React.Fragment>
      <div onClick={openDrawer}> <Hamburger toggled={open}  /></div>
      <Drawer open={open} onClose={closeDrawer} className="w-[16rem]" >
        <div className=" absolute right-0 flex items-center justify-end ">
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <div className=" w-[100%]">
        <Sidenav closeDrawer={closeDrawer}/>
        </div>
      </Drawer>
    </React.Fragment>
  );
}