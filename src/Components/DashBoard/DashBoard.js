import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const DashBoard = () => {
  const canvasEl = useRef(null);
  useEffect(() => {
    const options = {};
    const canvas = new fabric.Canvas(canvasEl.current, options);
    // make the fabric.Canvas instance available to your app
  }, []);

  return (
    <>
      <div className="mx-5 my-6">
        <button className=" bg-cyan-600 px-3 py-1 mr-2">Draw</button>
        <button className="bg-red-500 px-3 py-1 mr-2">Clear</button>
      </div>
      <canvas className="bg-white" width="300" height="300" ref={canvasEl} />
    </>
  );
};

export default DashBoard;
