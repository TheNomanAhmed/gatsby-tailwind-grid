import React from "react"
import beans from "../images/beans.jpg"
import coffee from "../images/coffee.jpg"
import machines from "../images/machines.jpg"

export const Projects = () => {
  return (
    <main className="sm:grid sm:grid-cols-2 md:grid-cols-3 my-10 gap-4 sm:mx-4">
      <article className="bg-purple-200 text-center rounded-md">
        <img src={beans} alt="Beans" className="w-full rounded-t-md " />
        <div className="py-2">
          <h3 className="text-xl font-medium">Beans Project</h3>
          <p>A bag of beans are here</p>
        </div>
      </article>
      <article className="bg-purple-200 text-center rounded-md">
        <img src={coffee} alt="coffee" className="w-full rounded-t-md" />
        <div className="py-2">
          <h3 className="text-xl font-medium">Coffee Project</h3>
          <p>A bag of beans are here</p>
        </div>
      </article>
      <article className="bg-purple-200 text-center rounded-md">
        <img src={machines} alt="machines" className="w-full rounded-t-md" />
        <div className="py-2">
          <h3 className="text-xl font-medium">Machines Project</h3>
          <p>A bag of beans are here</p>
        </div>
      </article>
    </main>
  )
}
