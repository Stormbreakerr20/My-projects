import React from "react";
import "./Mainarea.css";
export default function Nav() {
  return (
    <>
    <div className="cont">
      <div className="main ">
        <div className="txt">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="btns">
            <button className="shop">Shop Now</button>
            <button className="cat">Category</button>
          </div>
          <div className="box">
            <h3>Also Available on</h3>
            <div className="logo">
                <img src="/images/flipkart.png" alt="" />
                <img src="/images/amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="shoe">
          <img src="/images/hero-image.png" alt="" />
        </div>
      </div>
      </div>
    </>
  );
}
