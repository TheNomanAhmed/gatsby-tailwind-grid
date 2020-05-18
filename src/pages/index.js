import React from "react"
import Layout from "../components/Layout"
import { useTheme } from "../utils/themeContext"
// import { Link } from "gatsby"
import { Projects, Nav, InfoCard } from "../components"
import "../styles.css"
import background from "../images/background.jpg"

export default () => {
  const { toggleTheme } = useTheme()
  return (
    <div>
      <Layout>
        {/* InfoCard */}

        <InfoCard />
        <Nav />

        <img src={background} alt="Just a background" />
        <Projects />

        {/* Extra toggle code */}

        <div className="absolute w-full h-screen bg-background p-12 flex flex-col align-center">
          <h1 className="text-center text-heading text-4xl font-bold">
            Gatsby + Tailwind Theming example
          </h1>
          <p className="text-center mt-8 text-xl text-body">
            This is a basic example of how to setup theming using Tailwind +
            PostCSS. checkout the{" "}
            <a
              className="text-primary hover:text-primary-hover"
              href="https://github.com/horacioh/gatsby-tailwind-theming-example"
              target="_blank"
            >
              repo
            </a>{" "}
            for more information!
          </p>
          <p className="text-center mt-8 text-xl text-body">
            Developed by{" "}
            <a
              className="text-primary hover:text-primary-hover"
              href="https://twitter.com/hhg2288"
              target="_blank"
            >
              Horacio Herrera (@hhg2288)
            </a>
          </p>
          <div className="text-center">
            <button
              className="m-8 p-4 border rounded-lg bg-primary hover:bg-primary-hover text-white transition duration-200"
              onClick={toggleTheme}
            >
              Toggle theme
            </button>
          </div>
        </div>
      </Layout>

      {/* extra code */}
    </div>
  )
}
