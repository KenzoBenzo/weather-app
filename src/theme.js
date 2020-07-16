import React from "react"
import { theme } from "@chakra-ui/core"

const customTheme = {
  ...theme,
  fonts: {
    heading: `"Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `"Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  icons: {
    ...theme.icons,
    compass: {
      path: (
        <g fill="none">
          <path
            d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C6.83 3.52 3.52 6.83 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C17.17 20.48 20.48 17.17 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
            fill="currentColor"
          />
        </g>
      ),
      viewBox: "0 0 24 24",
    },
    pin: {
      path: (
        <path
          d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
          fill="currentColor"
        />
      ),
      viewBox: "0 0 24 24",
    },
    west: {
      path: (
        <g>
          <g clipPath="url(#clip0)">
            <path
              d="M8.01348 17.2203L9.61278 5.38071C9.70167 4.72534 10.5505 4.5087 10.9377 5.04729L13.4776 8.52307C13.603 8.68917 13.7882 8.79609 13.9948 8.8217L18.2749 9.28342C18.9312 9.35586 19.1717 10.1929 18.6486 10.5975L9.19484 17.9023C8.67811 18.3107 7.92459 17.8757 8.01348 17.2203Z"
              fill="#E7E7EB"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="17.6966"
                height="17.6966"
                fill="white"
                transform="translate(15.6997 24.7079) rotate(-150)"
              />
            </clipPath>
          </defs>
        </g>
      ),
      viewBox: "0 0 25 25",
    },
  },
}

export default customTheme
