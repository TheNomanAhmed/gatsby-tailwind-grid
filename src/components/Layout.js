import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { useTheme } from "../utils/themeContext"
import { Header, Button, InfoCardComp, Cta } from "./index"

const shortcodes = { Button, Cta, InfoCardComp }

const Layout = ({ children }) => {
  const { theme } = useTheme()
  return (
    <div
      className={`content-transition bg-background  font-roboto duration-200 ${theme}`}
    >
      <div className="max-w-screen-lg mx-auto">
        <Header />
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </div>
  )
}

export default Layout
