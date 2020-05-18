import React from "react"
import { Link } from "gatsby"

export const Button = ({ text, link }) => {
  return (
    <Link to={link} className="bg-primary text-background px-4 text-2xl py-2">
      {text}
    </Link>
  )
}
