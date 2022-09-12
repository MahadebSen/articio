import React from "react";
import "./MidSection.css";
import calender from "../../../images/calendar.svg";
import { FaCalendarAlt } from "react-icons/fa";

const MidSection = () => {
  return (
    <section className="my-16 mx-10">
      <p className="text-center text-3xl mb-20">Events</p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        <div className="flex-1 bg rounded-tl-3xl rounded-br-3xl lg:h-[650px]">
          <div className=""></div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <div>
            <p className="text-3xl">
              Upcoming Events And Exhibitions From Students
            </p>
            <p className=" font-thin mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className=" text-2xl">The Student Exhibitions</p>
            <div className="flex flex-row items-center gap-2">
              <FaCalendarAlt />
              <p className=" font-extralight">12 March - 20 March 2022</p>
            </div>
            <p className="font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="border-y-2 py-8 flex flex-col gap-4">
            <p className=" text-2xl">The Student Exhibitions #2</p>
            <div className="flex flex-row items-center gap-2">
              <FaCalendarAlt />
              <p className=" font-extralight">20 March - 24 March 2022</p>
            </div>
            <p className="font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidSection;
