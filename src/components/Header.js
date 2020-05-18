import React from "react"
import { Link } from "gatsby"
import { useTheme } from "../utils/themeContext"

export const Header = () => {
  const { toggleTheme } = useTheme()

  return (
    <header className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:px-4 md:py-5 justify-between">
      <Link to="/" className="text-2xl font-medium pb-3 sm:pb-0 text-heading">
        Tailwind Projects
      </Link>

      <ul className="flex m-0 content-center flex-row space-x-4 text-primary items-center justify-center ">
        <li className="m-0">
          <Link to="/grid">Grid</Link>
        </li>
        <li className="m-0">
          <Link to="/awesome">Awesome mdx</Link>
        </li>
        <li className="m-0">
          <Link to="/Animation">Animation</Link>
        </li>
        <li className="m-0">
          <button
            className="px-4 border rounded-lg bg-background-muted hover:bg-primary text-heading transition duration-200"
            onClick={toggleTheme}
          >
            Themes
          </button>
        </li>
      </ul>
    </header>
  )
}
