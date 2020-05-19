import React from "react"
// import { Link } from "gatsby"
import { Button } from "./Button"

export const Cta = ({ line1, line2, btn1, btn2, link1, link2 }) => {
  return (
    <div className="mt-12 pb-8">
      <div className=" mx-auto">
        <h2 className="text-3xl leading-9 tracking-tight text-heading sm:text-4xl sm:leading-10">
          {line1}
          <br />
          <span className="text-heading-muted">{line2}</span>
        </h2>
        <div className="mt-8 flex item-center flex0">
          <div className="inline-flex">
            <Button text={btn1} link={link1} />
            {/* <Button text={btn2} link={link2} /> */}
            {/* <Link
              to={link1}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              {btn1}
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to={link2}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              {btn2}
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
