import React from "react"
// import { Link } from "gatsby"
import { Header, Projects } from "../components"
import "../styles.css"
import background from "../images/background.jpg"

export default () => {
  return (
    <div>
      <Header />
      <img src={background} alt="Just a background" />
      <Projects />
    </div>
  )
}
