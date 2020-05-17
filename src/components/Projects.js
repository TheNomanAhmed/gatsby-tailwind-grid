import React from "react"
import beans from "../images/beans.jpg"
import coffee from "../images/coffee.jpg"
import machines from "../images/machines.jpg"

export const Projects = () => {
  return (
    <main className="sm:grid sm:grid-cols-2 md:grid-cols-3 py-10 gap-4 sm:px-4 bg-background-muted">
      <article className="bg-background text-primary mb-3 text-center rounded-md">
        <img src={beans} alt="Beans" className="w-full rounded-t-md " />
        <div className="py-2">
          <h3 className="text-xl font-medium text-heading">Beans Project</h3>
          <p>A bag of beans are here</p>
        </div>
      </article>
      <article className="bg-background text-primary mb-3 text-center rounded-md">
        <img src={coffee} alt="coffee" className="w-full rounded-t-md" />
        <div className="py-2">
          <h3 className="text-xl font-medium text-heading">Coffee Project</h3>
          <p>A bag of beans are here</p>
        </div>
      </article>
      <article className="bg-background text-primary mb-3 text-center rounded-md">
        <img src={machines} alt="machines" className="w-full rounded-t-md" />
        <div className="py-2">
          <h3 className="text-xl font-medium text-heading">Machines Project</h3>
          <p>A bag of beans are here</p>
        </div>
      </article>
    </main>
  )
}
