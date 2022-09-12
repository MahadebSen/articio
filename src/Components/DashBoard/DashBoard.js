import React from "react";

import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { onDrawLine } from "./fabric-extensions/drawLine";
// import { Canvas } from "fabric/fabric-impl";

const DashBoard = () => {
  const { editor, onReady } = useFabricJSEditor();
  const canvas = editor?.canvas;

  const onAddCircle = () => {
    editor?.addCircle();
  };

  const onAddRectangle = () => {
    editor?.addRectangle();
  };

  const onAddLine = () => {
    editor?.addLine();
  };

  return (
    <section className="max-w-6xl mx-auto">
      <p className="text-center text-3xl my-10">Your Art Board</p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-3 my-6">
        <button onClick={onAddCircle} className=" bg-cyan-600 px-3 py-1">
          Add Circle
        </button>
        <button onClick={onAddRectangle} className="bg-red-600 px-3 py-1">
          Add Rectangle
        </button>
        <button onClick={onAddLine} className=" bg-lime-800 px-3 py-1">
          Add Line
        </button>

        <button
          onClick={() => onDrawLine(canvas)}
          className=" bg-amber-700 px-3 py-1"
        >
          Draw Line
        </button>
      </div>
      <div className="mx-8 ">
        <FabricJSCanvas
          className="sample-canvas h-[600px] rounded-2xl bg-white border-2 border-red-500"
          onReady={onReady}
        />
      </div>
    </section>
  );
};

export default DashBoard;
