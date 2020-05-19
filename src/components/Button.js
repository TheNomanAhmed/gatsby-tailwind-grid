import React from "react"
import { Link } from "gatsby"

export const Button = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="bg-secondary mx-2 text-background rounded hover:bg-secondary-hover mx-2-hover px-4 text-2xl py-1"
    >
      {text}
    </Link>
  )
}
