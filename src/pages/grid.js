import React from "react"
import "../styles.css"
import { FaDumbbell, FaRunning, FaBatteryQuarter, FaBed } from "react-icons/fa"
// import bg01 from "../images/sunset.jpg"
export default () => {
  return (
    <div className="con w-full grid grid-rows-4 grid-cols-4 gap-1 h-full font-roboto">
      <div className="transition duration-100 ease-out bg1 bg-red-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform col-span-2">
        <h2 className="text-3xl">
          16 <span>| 24</span>
        </h2>
        <p>Goals Completed</p>
      </div>
      <div className="transition duration-100 ease-out bg1 bg-red-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform ">
        <h2>
          <FaBatteryQuarter className="text-3xl" />
          {/* <i className="fas fa-battery-three-quarters"></i> */}
        </h2>
        <p>Respiration</p>
      </div>
      <div className="transition duration-100 ease-out bg2 bg-blue-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform">
        <h2>
          <FaRunning className="text-3xl" />
          {/* <i className="fas fa-running"></i> */}
        </h2>
        <p>Miles</p>
      </div>
      <div className="transition duration-100 ease-out bg1 bg-red-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform">
        <h2 className="text-3xl">36 &deg;</h2>
        <p>Temperature</p>
      </div>
      <div className="transition duration-100 ease-out bg1 bg-red-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform">
        <h2>
          <FaBed className="text-3xl" />
          {/* <i className="fas fa-bed"></i> */}
        </h2>
        <p>Sleep Keep</p>
      </div>
      <div className="transition duration-100 ease-out bg2 bg-blue-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform col-span-2">
        <h2 className="text-3xl">
          98 <span>bpm</span>
        </h2>
        <p>Heart Rate</p>
      </div>
      <div className="transition duration-100 ease-out bg1 bg-red-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform">
        <h2 className="text-3xl">
          170 <span>lbs</span>
        </h2>
        <p>Weight</p>
      </div>
      <div className="transition duration-100 ease-out bg1 bg-red-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform">
        <h2 className="text-3xl">
          28 <span>%</span>
        </h2>
        <p>Fat Percentage</p>
      </div>
      <div className="transition duration-100 ease-out bg2 bg-blue-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform col-span-2">
        <h2 className="text-3xl">
          118 <span>mgdl</span>
        </h2>
        <p>Blood Glucose</p>
      </div>
      <div className="transition duration-100 ease-out bg2 bg-blue-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform col-span-2">
        <h2 className="text-3xl">
          680 <span>kcal</span>
        </h2>
        <p>AVG Consumption</p>
      </div>
      <div className="transition duration-300 ease-out bg2 bg-blue-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform">
        <h2>
          <FaDumbbell className="text-3xl" />
          {/* <i className="fas fa-dumbbell"></i> */}
        </h2>
        <p>Workouts</p>
      </div>
      <div className="transition duration-100 ease-out bg2 bg-blue-200 flex items-center justify-center flex-col h-40 hover:scale-95 transform">
        <h2 className="text-3xl">
          85 <span>%</span>
        </h2>
        <p>Body Hydration</p>
      </div>
    </div>
  )
}
