import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { useTheme } from "../utils/themeContext"
import { Header, Button } from "./index"

const shortcodes = { Button }

const Layout = ({ children }) => {
  const { theme } = useTheme()
  return (
    <div className={`content-transition font-roboto duration-200 ${theme}`}>
      <Header />
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </div>
  )
}

export default Layout
