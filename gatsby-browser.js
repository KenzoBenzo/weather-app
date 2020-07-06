import React from "react"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import theme from "./src/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        {element}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
