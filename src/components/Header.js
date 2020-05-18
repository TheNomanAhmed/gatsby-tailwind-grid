import React from "react"
import { Link } from "gatsby"
export const Header = () => {
  return (
    <header className="hidden sm:flex flex-col sm:flex-row items-center bg-background sm:px-4 md:py-5 justify-between">
      <Link to="/" className="text-2xl font-medium pb-3 sm:pb-0 text-heading">
        Tailwind Projects
      </Link>
      <ul className="flex flex-row space-x-4 text-primary">
        <li>
          <Link to="/grid">Grid</Link>
        </li>
        <li>
          <Link to="/awesome">Awesome mdx</Link>
        </li>
        <li>
          <Link to="/Animation">Animation</Link>
        </li>
      </ul>
    </header>
  )
}
