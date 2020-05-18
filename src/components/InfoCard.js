import React from "react"
import { InfoCardComp } from "./InfoCardComp"

export const InfoCard = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center item-center p-5">
      <InfoCardComp
        className="text-blue-500"
        borderColor="border border-teal-500"
        heading="Workshop"
        text="React is, in our opinion, the premier way to build big, fast Web apps
        with JavaScript. It has scaled very well for us at Facebook and
        Instagram."
        tag="New"
      />

      <InfoCardComp
        className="text-green-500"
        borderColor="border border-purple-500"
        heading="Workshop"
        text="React is, in our opinion, the premier way to build big, fast Web apps
        with JavaScript. It has scaled very well for us at Facebook and
        Instagram."
        tag="New"
      />

      <InfoCardComp
        className="text-blue-500"
        borderColor="border border-red-500"
        heading="Workshop"
        text="React is, in our opinion, the premier way to build big, fast Web apps
        with JavaScript. It has scaled very well for us at Facebook and
        Instagram."
        tag="New"
      />

      <InfoCardComp
        className="text-gray-500"
        borderColor="border border-red-500"
        heading="Workshop"
        text="React is, in our opinion, the premier way to build big, fast Web apps
        with JavaScript. It has scaled very well for us at Facebook and
        Instagram."
        tag="New"
      />
    </div>
  )
}
