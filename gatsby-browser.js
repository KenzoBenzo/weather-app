import React from "react"
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  theme,
} from "@chakra-ui/core"

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
